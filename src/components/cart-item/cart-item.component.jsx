import React from 'react';
import { CartItemContainer, ItemDetails } from './cart-item.styles';
const CartItem = ({cartItem}) => {
    const {imageUrl, name, quantity, price}= cartItem
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} X {price}</span>
            </ItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;