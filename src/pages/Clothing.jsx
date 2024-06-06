import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import myProducts from '../assets/myProducts.json';

const Clothing = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [sortOption, setSortOption] = useState('');

  const productsPerPage = 20;
  const navigate = useNavigate();
  const { category } = useParams();

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('randomProducts'));
    if (storedProducts && storedProducts.length) {
      setProducts(storedProducts);
      filterAndSortProducts('clothing', storedProducts);
    } else {
      setProducts(myProducts);
      filterAndSortProducts('clothing', myProducts);
    }
  }, []);

  useEffect(() => {
    filterAndSortProducts('clothing', products);
  }, [selectedSubcategory, sortOption, products]);

  const handleClick = (product) => {
    localStorage.setItem('currentProduct', JSON.stringify(product));
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filterAndSortProducts = (category, productList) => {
    let filtered = productList.filter(product => product.category === category);
    if (selectedSubcategory) {
      filtered = filtered.filter(product => product.subcategory === selectedSubcategory);
    }
    let sortedProducts = [...filtered];
    switch (sortOption) {
      case 'priceLowToHigh':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighToLow':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        // Keep the order as is
        break;
    }
    setFilteredProducts(sortedProducts);
    setCurrentPage(1); // Reset to the first page
  };

  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Clothing Products</h1>
      <div className="flex justify-between mb-4">
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 border rounded ${selectedSubcategory === '' ? 'bg-gray-300' : 'bg-white'}`}
            onClick={() => handleSubcategoryChange('')}
          >
            All Subcategories
          </button>
          <button
            className={`px-4 py-2 border rounded ${selectedSubcategory === 'jacket' ? 'bg-gray-300' : 'bg-white'}`}
            onClick={() => handleSubcategoryChange('jacket')}
          >
            Jackets
          </button>
          <button
            className={`px-4 py-2 border rounded ${selectedSubcategory === 'hoodie' ? 'bg-gray-300' : 'bg-white'}`}
            onClick={() => handleSubcategoryChange('hoodie')}
          >
            Hoodies
          </button>
          <button
            className={`px-4 py-2 border rounded ${selectedSubcategory === 'shirt' ? 'bg-gray-300' : 'bg-white'}`}
            onClick={() => handleSubcategoryChange('shirt')}
          >
            Shirts
          </button>
        </div>
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 border rounded ${sortOption === 'priceLowToHigh' ? 'bg-gray-300' : 'bg-white'}`}
            onClick={() => handleSortChange('priceLowToHigh')}
          >
            Price: Low to High
          </button>
          <button
            className={`px-4 py-2 border rounded ${sortOption === 'priceHighToLow' ? 'bg-gray-300' : 'bg-white'}`}
            onClick={() => handleSortChange('priceHighToLow')}
          >
            Price: High to Low
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredProducts.map((product, index) => (
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
