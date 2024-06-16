import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import myProducts from '../assets/myProducts.json'; // Ensure this path is correct

const ProductPage = () => {
  const location = useLocation();
  const storedProduct = JSON.parse(localStorage.getItem('currentProduct'));
  const product = storedProduct || (location.state && location.state.product);

  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showPreOrderInfo, setShowPreOrderInfo] = useState(false);
  const [showShippingInfo, setShowShippingInfo] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State to manage the pop-up visibility
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    if (showSuccessPopup) {
      const timer = setTimeout(() => {
        setShowSuccessPopup(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessPopup]);

  useEffect(() => {
    const selectRandomProducts = (products, num = 4) => {
      const selectedProducts = [];
      while (selectedProducts.length < num) {
        const randomIndex = Math.floor(Math.random() * products.length);
        const randomProduct = products[randomIndex];
        if (!selectedProducts.includes(randomProduct)) {
          selectedProducts.push(randomProduct);
        }
      }
      return selectedProducts;
    };

    const randomProducts = selectRandomProducts(myProducts);
    setRandomProducts(randomProducts);
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  const renderSizeButtons = () => {
    if (product.category) {
      const isShoeCategory = product.category === 'shoe';
      const sizes = isShoeCategory ? ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"] : ["S", "M", "L", "XL"];
      return (
        <div className="flex flex-wrap gap-2 mt-4">
          {sizes.map(size => (
            <button
              key={size}
              className={`border border-gray-300 text-sm font-semibold mb-1 py-2 px-4 rounded-md hover:bg-gray-200 ${
                selectedSize === size ? 'bg-gray-300' : ''
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      );
    } else {
      return <div>No category specified</div>;
    }
  };

  const handleConfirmOrder = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    const cartStorage = JSON.parse(localStorage.getItem('cartStorage')) || [];
    const productWithSizeAndQuantity = { ...product, size: selectedSize, quantity: quantity };
    cartStorage.push(productWithSizeAndQuantity);
    localStorage.setItem('cartStorage', JSON.stringify(cartStorage));

    setShowSuccessPopup(true); // Show the success pop-up
  };

  const handleClick = (product) => {
    localStorage.setItem('currentProduct', JSON.stringify(product));
  };

  return (
    <div className="p-3 max-w-7xl m-auto">
      <div className="mt-6 sm:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Images */}
          <div className="md:col-span-1">
            <div className="overflow-hidden rounded-xl">
              <img src={product.image} alt={product.title} className="w-full rounded-xl" />
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {product.images && product.images.length > 0 && product.images.map((img, index) => (
                <img key={index} src={img} alt={`${product.title} ${index + 1}`} className="w-1/3 rounded-xl" />
              ))}
            </div>
          </div>
          {/* Product Details */}
          <div className="md:col-span-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{product.title}</h1>
            <div className="text-xl text-gray-600 mt-4">{`Price: ${product.price} SEK`}</div>
            <div className="mt-6">
              {renderSizeButtons()}
            </div>
            <div className="mt-6">
              <label className="font-semibold">Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
                className="border border-gray-300 text-sm font-semibold py-2 px-4 rounded-md w-full mt-2"
                required
              />
            </div>
            <button
              onClick={handleConfirmOrder}
              className="mt-6 py-3 px-4 bg-gray-800 text-white font-bold rounded-md w-full hover:bg-gray-600 transition-colors duration-150"
            >
              Add to Cart
            </button>
            <div className="mt-10">
              <h2 className="text-lg font-semibold text-gray-800">Product Description</h2>
              <p className="text-gray-600 mt-4">{product.description}</p>
            </div>
            <div className="mt-10">
              <h2
                className="text-lg font-semibold text-gray-800 cursor-pointer"
                onClick={() => setShowPreOrderInfo(!showPreOrderInfo)}
              >
                Pre-order Information
              </h2>
              {showPreOrderInfo && (
                <ul className="text-gray-600 mt-4 space-y-2">
                  <li>1. Pre-order on our website</li>
                  <li>2. We source the product through our network of suppliers</li>
                  <li>3. We purchase the product for you</li>
                  <li>4. The product is delivered to us, inspected for quality, and then shipped to you</li>
                  <li>5. Delivery time for pre-order items is generally within 7-21 business days</li>
                </ul>
              )}
            </div>
            <div className="mt-10 ">
              <h2
                className="text-lg font-semibold text-gray-800 cursor-pointer "
                onClick={() => setShowShippingInfo(!showShippingInfo)}
              >
                Shipping Information
              </h2>
              {showShippingInfo && (
                <p className="text-gray-600 mt-4">Delivery within 2-5 business days. Orders placed on holidays are processed the next business day.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {showSuccessPopup && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-2/3 p-4 bg-green-100 text-green-700 text-center shadow-md transition-opacity duration-500 ease-in-out opacity-100">
          <div className="flex items-center justify-center mb-2">
            <div className="text-green-500 text-3xl">&#10003;</div>
          </div>
          <h2 className="text-xl font-semibold">SUCCESS</h2>
          <p className="mt-2">Thank you for your purchase!</p>
          <p className="mt-1">Navigate to the Checkout on the top right</p>
        </div>
      )}
      {/* Add 4 product cards at the bottom */}
      <div className="mt-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-black">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {randomProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
