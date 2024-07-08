import React, {useContext} from 'react';
import '@styles/OrderItem.scss';
import close from '@icons/icon_close.png'
import {Appcontext} from '@context/AppContext';

const OrderItem = ({product}) => {

	const {state, removeFromCart} = useContext(Appcontext)
	console.log(state)

	const handleDelete = item => (
		removeFromCart(item)
	)
    return (
		
        <div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt="bike" />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={close} alt="close" onClick={() => handleDelete(product)} />
		</div>
    );
}

export default OrderItem;