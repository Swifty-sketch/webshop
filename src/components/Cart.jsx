import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function Cart({ isCartOpen, toggleCart }) {
  const [cartItems, setCartItems] = useState([]);
  const cartRef = useRef();

  // Close cart when clicking outside
  useEffect(() => {
    if (isCartOpen) {
      const handleClickOutside = (event) => {
        if (cartRef.current && !cartRef.current.contains(event.target)) {
          toggleCart();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isCartOpen, toggleCart, cartRef]);

  // Retrieve cart items from localStorage and combine identical products
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartStorage')) || [];
    
    const combinedCart = storedCart.reduce((acc, item) => {
      const existingItem = acc.find(
        accItem => accItem.title === item.title && accItem.size === item.size && accItem.price === item.price
      );

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        acc.push(item);
      }

      return acc;
    }, []);

    setCartItems(combinedCart);
  }, [isCartOpen]);

  // Calculate the subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div
      ref={cartRef}
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
              <p>Price: {item.price} $</p>
              <p>Size: {item.size}</p>
              <p>
                Quantity: 
                <input 
                  type="number" 
                  value={item.quantity} 
                  readOnly 
                  className="border border-gray-300 text-sm font-semibold w-12 ml-2"
                />
              </p>
            </div>
          </div>
        ))}
        <p className="p-4 border-b">Total: {subtotal}$</p>
        <Link
          to={{ pathname: "/checkout", state: { cartItems } }}
          className="bg-black text-white py-2 px-4 m-4 rounded"
          onClick={toggleCart} // Add onClick event handler
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
