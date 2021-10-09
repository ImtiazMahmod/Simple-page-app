import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props.cart)
    const {cart}=props
    const total = cart.reduce((previous,current)=>previous+ current.price,0)

    const Shipping = 50;
    const tax = total*0.2;
    const totalOrder = Shipping+ tax + total;
    return (
        <div className="cart">
            <div className="cart-header">
                <h2>Order Summery</h2>
                <p>Items oredered: {props.cart.length}</p>               
            </div>
                <p>Items: $ {props.cart.length}</p>
                <p>Shipping & Handling:	${Shipping}</p>
                <p>Total before tax:	${total}</p>
                <p>Estimated Tax:	${tax}</p>
                <h3 className="cart-total">Order Total:	${totalOrder.toFixed(2)}</h3>
                <button className="btn-regular">Review Your Order</button>

        </div>
    );
};

export default Cart;