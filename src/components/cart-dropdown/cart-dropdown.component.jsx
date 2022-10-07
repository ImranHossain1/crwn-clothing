import React, { useContext } from 'react';
import { cartContext } from '../../context/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss'
const CartDropdown = () => {
    const {cartItems} = useContext(cartContext)
    return (
        <div className='cart-dropdown-container'>
            <div className="cart-items">
                {cartItems.map(item=><CartItem key={item.id} cartItem={item}></CartItem>)}
            </div>  
            <Button>CHECKOUT NOW</Button>
        </div>
    );
};

export default CartDropdown;