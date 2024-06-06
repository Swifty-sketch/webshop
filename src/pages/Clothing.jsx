import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import myProducts from '../assets/myProducts.json';

const Clothing = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  const navigate = useNavigate();
  const { category } = useParams();

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('randomProducts'));
    if (storedProducts && storedProducts.length) {
      setProducts(storedProducts);
      filterProducts('clothing', storedProducts);
    } else {
      // Assuming you have stored the complete product list in localStorage
      setProducts(myProducts);
      filterProducts('clothing', myProducts);
    }
  }, []);

  const handleClick = (product) => {
    localStorage.setItem('currentProduct', JSON.stringify(product));
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filterProducts = (category, productList) => {
    const filtered = productList.filter(product => product.category === category);
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to the first page
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Clothing Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {currentProducts.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            handleClick={handleClick}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }).map((_, index) => (
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

export default Clothing;
