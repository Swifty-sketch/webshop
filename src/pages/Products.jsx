import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import myProducts from '../assets/myProducts.json';

const Products = () => {
  // State variables for products and current page
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20; // Number of products to display per page

  useEffect(() => {
    // Fetch products from local storage or API
    const storedProducts = JSON.parse(localStorage.getItem('randomProducts'));
    if (storedProducts && storedProducts.length) {
      setProducts(storedProducts);
    } else {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
          const fetchedProducts = data;
          const allProducts = [...fetchedProducts, ...myProducts];
          const shuffledProducts = shuffleArray(allProducts);
          localStorage.setItem('randomProducts', JSON.stringify(shuffledProducts));
          setProducts(shuffledProducts);
        })
        .catch(error => {
          console.error('Error fetching data from API:', error);
          setProducts(myProducts);
        });
    }
  }, []);

  const shuffleArray = (array) => {
    // Shuffle the array of products
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleClick = (product) => {
    // Store the selected product in local storage
    localStorage.setItem('currentProduct', JSON.stringify(product));
  };

  // Calculate the index of the last and first product on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // Get the products for the current page
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Random Products</h1>
      <div className="flex flex-wrap justify-center gap-1">
        {/* Render product cards for the current page */}
        {currentProducts.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            handleClick={handleClick}
          />
        ))}
      </div>
      {/* Pagination buttons */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 border ${currentPage === index + 1 ? 'bg-gray-300' : 'bg-white'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;
