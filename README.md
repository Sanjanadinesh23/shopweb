# shopweb
/* App.css */
.App {
  font-family: Arial, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

nav {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
}

nav .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav input[type="text"] {
  padding: 5px;
  border-radius: 5px;
  border: none;
}

.categories {
  margin: 20px 0;
}

.categories button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
}

.product-card {
  border: 1px solid #ccc;
  padding: 20px;
}

.product-card img {
  max-width: 100%;
  height: auto;
}

.product-info h3 {
  margin-top: 0;
}

.quantity-controls {
  display: flex;
  align-items: center;
}

.quantity-controls button {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
}

.quantity-controls span {
  margin: 0 5px;
}




// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Category 1', price: 10.99, rating: 4, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', category: 'Category 2', price: 15.99, rating: 3, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', category: 'Category 1', price: 20.99, rating: 5, image: 'product3.jpg' },
    // Add more products as needed
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const incrementQuantity = (productId) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decrementQuantity = (productId) => {
    const updatedCart = cart.map(item =>
      item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart.filter(item => item.quantity > 0));
  };

  return (
    <div className="App">
      <header>
        <nav>
          <div className="container">
            <h1>Shopping Cart</h1>
            <input type="text" placeholder="Search..." />
          </div>
        </nav>
      </header>
      <div className="container">
        <div className="categories">
          <button>All</button>
          <button>Category 1</button>
          <button>Category 2</button>
          {/* Add more category buttons as needed */}
        </div>
        <div className="products">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>Category: {product.category}</p>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.rating}</p>
                <div className="quantity-controls">
                  <button onClick={() => decrementQuantity(product.id)}>-</button>
                  <span>0{/* Render quantity here */}</span>
                  <button onClick={() => incrementQuantity(product.id)}>+</button>
                </div>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
