import React, {useEffect, useState} from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from './reducer';
import axios from "./axios";


function Payment() {
    const [{user, basket}, dispatch] = useStateValue();
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    //The code from lines 26 to 37: whenever basket changes, a unique secret is created by Stripe for the payment processing.  
    useEffect(() => {
        const getClientSecret = async() =>{
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}` //Stripe expects the total in a currency's subunits. I'm sticking to USD($)
            })

            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async event => {
        event.preventDefault(); //prevent refreshing
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            // paymentIntent = payment confirmation
            setSucceeded(true);
            setError("");
            setProcessing(false);

            navigate.replace('/orders');
        })
    }

    const handleChange = event => {
        //Listen for any changes in the CardElement and display any error as the card number is typed.
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout (<Link to="/checkout">{basket?.length} items</Link>)
            </h1>

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3> Delivery Address</h3>    
                </div>  
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>1247 W 30th Street</p>
                    <p>Los Angeles, CA - 90007</p>
                </div>  
            </div> 

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3> Review items and delivery</h3>    
                </div>   
                <div className='payment__items'>
                    {/* All items here */}
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id} 
                            title={item.title} 
                            rating={item.rating} 
                            image={item.image} 
                            price={item.price}  />
                    ))}
                </div>  
            </div>    

            {/*Payment Section */}

            <div className='payment__section'>
                <div className='payment__title'>
                        <h3> Payment Method </h3>    
                </div>   
                <div className='payment__details'>
                    {/* Stripe magic here */}
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />
                        <div className='payment__priceContainer'>
                            <CurrencyFormat renderText={(value) => (
                                    <>
                                    <h3> Order Total: {value}</h3>
                                    </>
                                )}

                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={'$'}
                            />

                            <button disabled={processing || disabled || succeeded}> 
                                <span> {processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </div>

                        {/* Errors */}
                        {error && <div>{error}</div>}

                    </form>
                </div>  
            </div>      
        </div>
    </div>
  )
}

export default Payment;