import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    const {name,seller,price,stock,img}= props.product
    // console.log(props.product)
    return (
      <div>
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2 className="product-name">{name}</h2>
                <p>by: {seller}</p>
                <p>${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={()=>props.handleAddtoCart(props.product)} className="btn-regular">add to cart</button>

            </div>

        </div>
      </div>
    );
};

export default Product;