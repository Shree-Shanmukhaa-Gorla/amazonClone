import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, image, rating  }) {

  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () =>{
    //dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <Rating rating={rating} />
      </div>

      <img src={image} alt="product"></img>

      <button onClick={addToBasket}> Add to Basket </button>
    </div>
  );
}

export default Product;
