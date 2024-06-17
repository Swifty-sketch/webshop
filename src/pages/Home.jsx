import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import shoeImage from '../assets/shoe.png'; // Make sure the path is correct
import myProducts from '../assets/myProducts.json'; // Ensure this path is correct

const Home = () => {
  const [randomProducts1, setRandomProducts1] = useState([]);
  const [randomProducts2, setRandomProducts2] = useState([]);

  useEffect(() => {
    const selectRandomProducts = (products, excludeProducts = [], count = 4) => {
      const selectedProducts = [];
      while (selectedProducts.length < count) {
        const randomIndex = Math.floor(Math.random() * products.length);
        const randomProduct = products[randomIndex];
        if (!selectedProducts.includes(randomProduct) && !excludeProducts.includes(randomProduct)) {
          selectedProducts.push(randomProduct);
        }
      }
      return selectedProducts;
    };

    // Select 4 random products from local JSON for the first set
    const randomProducts1 = selectRandomProducts(myProducts);
    setRandomProducts1(randomProducts1);

    // Select 4 random products from local JSON for the second set excluding the first set
    const randomProducts2 = selectRandomProducts(myProducts, randomProducts1);
    setRandomProducts2(randomProducts2);
  }, []);

  const handleClick = (product) => {
    localStorage.setItem('currentProduct', JSON.stringify(product));
  };

  return (
    <div className="min-h-screen flex flex-col text-white">
      <header className="w-full bg-cover bg-center" style={{ backgroundImage: `url(${shoeImage})` }}>
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-5/12 w-full">
            <h1 className="my-4 text-4xl md:text-5xl font-bold leading-tight">
              Time to update your wardrobe?
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Or just to treat yourself.
            </p>
            <div className="flex justify-center mx-auto">
              <Link
                to="/products"
                className="hover:underline bg-white text-gray-800 font-bold rounded-full py-3 px-6 md:py-4 md:px-8"
              >
                Browse
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-black">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Adjusted to 4 columns */}
          {randomProducts1.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              handleClick={handleClick}
            />
          ))}
        </div>
      </main>
      <div className="w-full bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`, height: '500px' }}></div>
      <main className="flex-grow container mx-auto py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-black">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Adjusted to 4 columns */}
          {randomProducts2.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              handleClick={handleClick}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
