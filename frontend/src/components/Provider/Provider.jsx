import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Provider = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    venueName: '',
    Email: '',
    location: '',
    PhoneNumber: '',
    About: '',
    price: '',
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'images') {
      const selectedFiles = Array.from(files);
      if (selectedFiles.length + formData.images.length > 10) {
        alert('You can upload up to 10 images only.');
        return;
      }

      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...selectedFiles],
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Venue Data:', formData);
    // لاحقاً ترسليهم باستخدام FormData للـ backend
  };
  const handleRemoveImage = (indexToRemove) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, index) => index !== indexToRemove),
    }));
  };
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <h2 className="text-3xl font-bold text-primary mb-6">Add Your Venue</h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-full max-w-xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="venueName"
          placeholder="Venue Name"
          value={formData.venueName}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          name="Email"
          placeholder="Venue Email"
          value={formData.Email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary"
        />
        <input
          type="number"
          name="PhoneNumber"
          placeholder="Phone Number"
          value={formData.PhoneNumber}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary"
        />
        <input
          type="text"
          name="About"
          placeholder="About us"
          value={formData.About}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary"
        />

        <input
          type="file"
          name="images"
          accept="image/*"
          multiple
          onChange={handleChange}
          className="w-full"
        />

        {/* عرض الصور المرفوعة */}
        <div className="flex flex-wrap gap-4 mt-4">
  {formData.images.map((image, index) => (
    <div
      key={index}
      className="relative w-32 h-32 overflow-hidden rounded-md border border-gray-300"
    >
      <img
        src={URL.createObjectURL(image)}
        alt={`Image ${index + 1}`}
        className="w-full h-full object-cover"
      />
      <button
        type="button"
        onClick={() => handleRemoveImage(index)}
        className="absolute top-1 right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center hover:bg-red-800"
      >
        ✖
      </button>
    </div>
  ))}
</div>
<button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary"
        >
     Send to admin
        </button>
      </form>

      <button
        onClick={() => navigate('/')}
        className="mt-6 text-sm text-gray-600 hover:underline"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Provider;
