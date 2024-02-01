// src/App.js
import React, { useState } from 'react';

const TicketBookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    numberOfTickets: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store data in local storage
    localStorage.setItem('bookingData', JSON.stringify(formData));

    // You can also perform any API calls or additional logic here

    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      numberOfTickets: 1,
    });
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Ticket Booking Form</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numberOfTickets">Number of Tickets:</label>
          <input
            type="number"
            id="numberOfTickets"
            name="numberOfTickets"
            value={formData.numberOfTickets}
            onChange={handleChange}
            min="1"
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo"
        >
          Book Tickets
        </button>
      </form>
    </div>
  );
};

export default TicketBookingForm;