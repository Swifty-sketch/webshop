import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('randomProducts'));
    if (storedProducts) {
      setProducts(storedProducts);
    } else {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
          const selectedProducts = [];
          while (selectedProducts.length < 2) {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomProduct = data[randomIndex];
            if (!selectedProducts.some(product => product.id === randomProduct.id)) {
              selectedProducts.push({
                ...randomProduct,
                category: randomProduct.category // Add category to each product
              });
            }
          }
          localStorage.setItem('randomProducts', JSON.stringify(selectedProducts));
          setProducts(selectedProducts);
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, []);

  const handleClick = (product) => {
    localStorage.setItem('currentProduct', JSON.stringify(product));
  };

  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Random Products</h1>
      {products.map((product, index) => (
        <div key={index} className="w-64 h-80 border border-gray-300 rounded-lg p-4 mb-4">
          <img 
            src={product.image} 
            alt={product.title} 
            className="object-contain mb-2" 
            style={{ maxWidth: '100px', maxHeight: '100px' }} 
          />
          <h2 className="text-lg font-semibold mb-2">{truncateString(product.title, 66)}</h2>
          <p className="text-sm text-gray-600">{truncateString(product.description, 66)}</p>
          <Link to={{ pathname: '/productpage', state: { product } }}>
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
              onClick={() => handleClick(product)} // Add onClick event
            >
              Buy
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
