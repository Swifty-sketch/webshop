import React, { useState, useEffect } from 'react';
import { Button, Input } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

export default function CheckoutForm() {
  // State for managing edit mode
  const [editing, setEditing] = useState(false);

  // State for managing user information
  const [userInfo, setUserInfo] = useState({
    name: 'Johan Svensson',
    address: 'Storgatan 12, 123 45 Stockholm',
    phone: '0701234567',
    email: 'johan.svensson@example.com',
  });

  // State for managing selected payment method
  const [paymentMethod, setPaymentMethod] = useState('Få först. Betala sen.');
  const navigate = useNavigate();

  // Load user info from local storage on component mount
  useEffect(() => {
    const savedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (savedUserInfo) {
      setUserInfo(savedUserInfo);
    }
  }, []);

  // Handle input change and update user info in state and local storage
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newUserInfo = { ...userInfo, [name]: value };
    setUserInfo(newUserInfo);
    localStorage.setItem('userInfo', JSON.stringify(newUserInfo));
  };

  // Toggle edit mode and save user info to local storage when exiting edit mode
  const handleEditToggle = () => {
    setEditing(!editing);
    if (editing) {
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }
  };

  // Navigate to the checkout end page
  const handlePayment = () => {
    navigate('/checkoutend');
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {/* User Information */}
      <div className="w-full max-w-md p-4 border rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Dina uppgifter</h2>
        {editing ? (
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Name"
            />
            <Input
              type="text"
              name="address"
              value={userInfo.address}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Address"
            />
            <Input
              type="text"
              name="phone"
              value={userInfo.phone}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Phone"
            />
            <Input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Email"
            />
          </div>
        ) : (
          <div>
            <p>{userInfo.name}</p>
            <p>{userInfo.address}</p>
            <p>{userInfo.phone}</p>
            <p>{userInfo.email}</p>
          </div>
        )}
        <Button onClick={handleEditToggle} className="mt-2 bg-gray-800 hover:bg-gray-600" size="sm">
          {editing ? 'Spara' : 'Ändra'}
        </Button>
      </div>

      {/* Payment Methods */}
      <div className="w-full max-w-md p-4 border rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Betalsätt</h2>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentMethod"
              value="Få först. Betala sen."
              checked={paymentMethod === 'Få först. Betala sen.'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="form-radio"
            />
            Få först. Betala sen.
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentMethod"
              value="Dela upp."
              checked={paymentMethod === 'Dela upp.'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="form-radio"
            />
            Dela upp.
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentMethod"
              value="Kort eller bankkonto"
              checked={paymentMethod === 'Kort eller bankkonto'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="form-radio"
            />
            Kort eller bankkonto
          </label>
        </div>
      </div>

      {/* Delivery Options */}
      <div className="w-full max-w-md p-4 border rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Leverans</h2>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="deliveryOption"
              value="Standardleverans"
              defaultChecked
              className="form-radio"
            />
            Standardleverans - SEK 29
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="deliveryOption"
              value="Prioriterad leverans"
              className="form-radio"
            />
            Prioriterad leverans - SEK 79
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="deliveryOption"
              value="Hemleverans"
              className="form-radio"
            />
            Hemleverans - SEK 129
          </label>
        </div>
        <Button onClick={handlePayment} className="mt-2 bg-gray-800 hover:bg-gray-600" size="sm">
          Betala
        </Button>
      </div>
    </div>
  );
}
