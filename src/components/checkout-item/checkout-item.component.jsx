import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import {CheckoutItemElement, ImageContainer, GeneralStyle, Quantity, RemoveButton, Value, Arrow} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<CheckoutItemElement>
			<ImageContainer>
				<img src={imageUrl} alt="item" />
			</ImageContainer>
			<GeneralStyle>{name}</GeneralStyle>
			<Quantity>
				<div className="arrow" onClick={() => removeItem(cartItem)}>
					&#10094;
				</div>
				<Value>{quantity}</Value>
				<Arrow onClick={() => addItem(cartItem)}>
					&#10095;
				</Arrow>
			</Quantity>
			<GeneralStyle>{price}</GeneralStyle>
			<RemoveButton onClick={() => clearItem(cartItem)}>
				&#10005;
			</RemoveButton>
		</CheckoutItemElement>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCart(item)),
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
