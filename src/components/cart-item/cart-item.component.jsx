import React from 'react';

import { CartItemElemContainer, ItemDetails } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<CartItemElemContainer>
		<img src={imageUrl} alt="item" />
		<ItemDetails>
			<span className="name">{name}</span>
			<span className="price">
				{quantity} x ${price}
			</span>
		</ItemDetails>
	</CartItemElemContainer>
);

export default CartItem;
