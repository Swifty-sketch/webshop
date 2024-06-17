import React, { useState, useEffect } from 'react';
import { Button, Input } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

export default function CheckoutForm() {
  const [editing, setEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  });
  const [deliveryAddress, setDeliveryAddress] = useState('Samma adress som ovan');
  const [paymentMethod, setPaymentMethod] = useState('Få först. Betala sen.');
  const navigate = useNavigate();

  useEffect(() => {
    // Load user info from local storage on component mount
    const savedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (savedUserInfo) {
      setUserInfo(savedUserInfo);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newUserInfo = { ...userInfo, [name]: value };
    setUserInfo(newUserInfo);
    // Save user info to local storage
    localStorage.setItem('userInfo', JSON.stringify(newUserInfo));
  };

  const handleEditToggle = () => {
    setEditing(!editing);
    if (editing) {
      // Save user info to local storage when exiting edit mode
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }
  };

  const handlePayment = () => {
    navigate('/checkoutend');
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {/* User Information */}
      <div className="w-full max-w-md p-4 border rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Dina uppgifter.</h2>
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
        <Button onClick={handleEditToggle} className="mt-2" size="sm">
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
            Standardleverans
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
        <Button onClick={handlePayment} className="mt-2" size="sm">
          Betala
        </Button>
      </div>
    </div>
  );
}
