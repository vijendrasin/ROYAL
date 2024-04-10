import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../store/Cartslice';
import products from '../products/Product'; // Assuming products are imported correctly
import './Productscard.css';

const ProductCard = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeItem(productId));
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className="product-details">
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
          </div>
          <div className="product-actions">
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
