import React, { useEffect, useState } from 'react';

function Cart({ isCartOpen, toggleCart }) {
  const [cartItems, setCartItems] = useState([]);

  // Retrieve cart items from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartStorage')) || [];
    setCartItems(storedCart);
  }, [isCartOpen]);

  // Calculate the subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div
      className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-300 ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button onClick={toggleCart} className="absolute top-4 right-4">
        Close
      </button>
      <h2 className="text-xl font-bold p-4">Varukorg ({cartItems.length})</h2>
      <div className="overflow-y-auto h-full">
        {cartItems.map((item, index) => (
          <div key={index} className="flex items-center p-4 border-t border-b">
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 mr-4"
            />
            <div>
              <p className='font-semibold'>{item.title}</p>
              <p>Price: {item.price} SEK</p>
              <p>Size: {item.size}</p>
            </div>
          </div>
        ))}
        <p className="p-4 border-b">SUBTOTAL: {subtotal} SEK</p>
        <button className="bg-black text-white py-2 px-4 m-4 rounded">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
