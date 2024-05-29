import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard'; // Import the ProductCard component
import myProducts from '../assets/myProducts.json';

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
          const fetchedProducts = data;
          const allProducts = [...fetchedProducts, ...myProducts]; // Merge fetched and local products
          const shuffledProducts = shuffleArray(allProducts);
          localStorage.setItem('randomProducts', JSON.stringify(shuffledProducts));
          setProducts(shuffledProducts);
        })
        .catch(error => {
          console.error('Error fetching data from API:', error);
          // If API fetch fails, use local products as fallback
          setProducts(myProducts);
        });
    }
  }, []);

  const shuffleArray = (array) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleClick = (product) => {
    localStorage.setItem('currentProduct', JSON.stringify(product));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Random Products</h1>
      <div className="flex flex-wrap justify-center gap-1">
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
