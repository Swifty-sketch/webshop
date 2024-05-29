import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import myProducts from '../assets/myProducts.json';

const Products = () => {
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
      filterProducts(category || 'all', storedProducts);
    } else {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
          const fetchedProducts = data;
          const allProducts = [...fetchedProducts, ...myProducts];
          const shuffledProducts = shuffleArray(allProducts);
          localStorage.setItem('randomProducts', JSON.stringify(shuffledProducts));
          setProducts(shuffledProducts);
          filterProducts(category || 'all', shuffledProducts);
        })
        .catch(error => {
          console.error('Error fetching data from API:', error);
          setProducts(myProducts);
          filterProducts(category || 'all', myProducts);
        });
    }
  }, [category]);

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

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filterProducts = (category, productList = products) => {
    if (category === 'all') {
      setFilteredProducts(productList);
    } else {
      const filtered = productList.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
    setCurrentPage(1); // Reset to the first page
  };

  const handleCategoryClick = (category) => {
    navigate(`/products/${category}`);
    filterProducts(category);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Random Products</h1>
      <div className="flex justify-center mb-4">
        <button
          onClick={() => handleCategoryClick('all')}
          className="mx-2 px-4 py-2 border bg-white hover:bg-gray-100"
        >
          All
        </button>
        <button
          onClick={() => handleCategoryClick('shoe')}
          className="mx-2 px-4 py-2 border bg-white hover:bg-gray-100"
        >
          Shoes
        </button>
        <button
          onClick={() => handleCategoryClick('shirt')}
          className="mx-2 px-4 py-2 border bg-white hover:bg-gray-100"
        >
          Shirts
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-1">
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

export default Products;
