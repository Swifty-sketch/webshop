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
    const storedRandomProduct = JSON.parse(localStorage.getItem('randomProduct'));
    const storedShoeProducts = JSON.parse(localStorage.getItem('shoeProducts'));

    if (storedRandomProduct && storedShoeProducts) {
      const allProducts = [...storedShoeProducts, storedRandomProduct]; // Place random product at the end
      setProducts(allProducts);
      filterProducts(category || 'all', allProducts);
    } else {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
          const randomProduct = getRandomProduct(data);
          localStorage.setItem('randomProduct', JSON.stringify(randomProduct));

          const filteredProducts = myProducts.filter(product => product.category === 'shoe');
          localStorage.setItem('shoeProducts', JSON.stringify(filteredProducts));

          const allProducts = [...filteredProducts, randomProduct];
          setProducts(allProducts);
          filterProducts(category || 'all', allProducts);
        })
        .catch(error => {
          console.error('Error fetching random product from API:', error);

          const filteredProducts = myProducts.filter(product => product.category === 'shoe');
          setProducts(filteredProducts);
          filterProducts(category || 'all', filteredProducts);
        });
    }
  }, [category]);

  const getRandomProduct = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const handleClick = (product) => {
    localStorage.setItem('currentProduct', JSON.stringify(product));
    navigate(`/product/${product.id}`);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const filterProducts = (category, productList = products) => {
    if (category === 'all') {
      setFilteredProducts(productList);
    } else {
      const filtered = productList.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
    setCurrentPage(1);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const lastProductIndex = currentProducts.length - 1;

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Shoes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentProducts.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            handleClick={handleClick}
            className="p-2"
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
