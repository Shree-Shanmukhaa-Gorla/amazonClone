import React, { useCallback } from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title, price, rating, hideButton}) {
    
    const [{basket, user}, dispatch] = useStateValue();

    const removeFromBasket = useCallback(()=>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    },[id])
  
    return (
    <div className='checkoutProduct '>
        <img className='checkoutProduct__image'  src={image} alt="" />

        <div className='checkoutProduct__info'> 
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checkoutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>

            <Rating rating={rating} />

            {!hideButton && ( 
                <button onClick={removeFromBasket}>Remove from Basket</button>
            )}
            
        </div>
    </div>
  )
}

export default React.memo(CheckoutProduct)