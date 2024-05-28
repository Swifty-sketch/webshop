import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard'; // Import the ProductCard component

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('randomProducts'));
    if (storedProducts && storedProducts.length) {
      setProducts(storedProducts);
    } else {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
          const selectedProducts = [];
          const numOfProducts = 2; // Set the number of products you want to fetch
          while (selectedProducts.length < numOfProducts) {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomProduct = data[randomIndex];
            if (!selectedProducts.some(product => product.id === randomProduct.id)) {
              selectedProducts.push(randomProduct);
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

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Random Products</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
