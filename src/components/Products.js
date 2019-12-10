import React from 'react';
import {useContext} from 'react'

// Components
import Product from './Product';

import {ProductContext} from './../contexts/ProductContext'
import {CartContext} from './../contexts/CartContext'

const Products = ()=> {

	const {products, addItem} = useContext(ProductContext)
	const {removeItem} = useContext(CartContext)

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
					removeItem={removeItem}
				/>
			))}
		</div>
	);
};

export default Products;
