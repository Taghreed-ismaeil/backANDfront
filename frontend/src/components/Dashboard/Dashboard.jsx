import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    city: '',
    gender: ''
  });

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const userData = JSON.parse(sessionStorage.getItem('user'));

    if (!token) {
      navigate('/');
    } else {
      setIsAuthenticated(true);

      if (userData) {
        setFormData({
          name: userData.name || '',
          email: userData.email || '',
          phoneNumber: userData.phoneNumber || '',
          city: userData.city || '',
          gender: userData.gender || ''
        });
      }
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  if (!isAuthenticated) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}


      {/* Main Content */}
      <main className="flex-1 p-8">
        <h3 className="text-2xl font-semibold text-primary mb-6">User Information</h3>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 max-w-lg border border-gray-300 rounded-md p-6 shadow-sm"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
          />

          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
          />

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
          />

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mr-4">Gender</label>
            <div className="flex items-center gap-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                  className="form-radio text-primary w-5 h-5"
                />
                <span className="ml-2 text-primary">Male</span>
              </label>

              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                  className="form-radio text-primary w-5 h-5"
                />
                <span className="ml-2 text-primary">Female</span>
              </label>
            </div>
          </div>
        </form>

        <button
          onClick={() => navigate('/')}
          className="mt-6 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
        >
          Go to Home
        </button>
      </main>
    </div>
  );
};

export default Dashboard;
