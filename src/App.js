import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Contexts

import {ProductContext} from './contexts/ProductContext'

function App() {

	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const {products, addItem} = useContext(ProductContext)

	const addItem = item => {
		setCart([...cart, item])
	};

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<ProductContext.Provider value={{ products, addItem }}>
				<Route
					exact path="/"
					component={Products}
				/>
			</ProductContext.Provider>

			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>
		</div>
	);
}

export default App;
