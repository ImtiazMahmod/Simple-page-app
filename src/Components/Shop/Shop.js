import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    }, [])

    const [cart,setCart]=useState([])
    const handleAddtoCart=(product)=>{
        const newCart = [...cart ,product]
        setCart(newCart)
        // console.log(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
               {
                   products.map(product=> <Product
                   key={product.key}
                   product={product}
                   handleAddtoCart={handleAddtoCart}
                   ></Product>)
               }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;