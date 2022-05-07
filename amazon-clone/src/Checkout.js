import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' alt="" src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492688_.jpg'></img>
            <div>
                <h2 className='checkout__title'>Your shopping Basket</h2>

                {basket.map(item => (
                <CheckoutProduct id={item.id} title={item.title} rating={item.rating} image={item.image} price={item.price}  />

                ))}


                {/* <CheckoutProduct id="1233456" image="https://m.media-amazon.com/images/I/818jj0DF-dL._AC_UY327_QL65_.jpg" rating={5} title="Lore IpsumLore IpsumLore IpsumLore IpsumLore IpsumLore IpsumLore IpsumLore IpsumLore Ipsum" price={12.99}/>
                <CheckoutProduct id="1233456" image="https://m.media-amazon.com/images/I/818jj0DF-dL._AC_UY327_QL65_.jpg" rating={5} title="Lore IpsumLore IpsumLore IpsumLore IpsumLore IpsumLore IpsumLore IpsumLore IpsumLore Ipsum" price={12.99}/> */}
                {/* <CheckoutProduct />
                <CheckoutProduct /> */}

            </div>

            <div className='checkout__right'>
            <Subtotal />
            </div>
        </div>
    </div>
  )
}

export default Checkout


