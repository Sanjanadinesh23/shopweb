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
