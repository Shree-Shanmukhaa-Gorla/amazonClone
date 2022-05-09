import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {
const [{user, basket}, dispatch] = useStateValue();
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

            <div className='payment__section'>
            <div className='payment__title'>
                    <h3> Payment Method </h3>    
                </div>   
                <div className='payment__details'>
                    {/* Stripe magic here */}

                </div>  
            </div>      
        </div>
    </div>
  )
}

export default Payment;