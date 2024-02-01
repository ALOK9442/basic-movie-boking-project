import React, { useEffect, useState } from 'react';
import { gettingData } from '../api/api_integration';
import { Link } from 'react-router-dom';
import Button from '../common/button';



function Summary() {
    const [movieSummary, setMovieSummary] = useState('');
    const [showTicketForm, setShowTicketForm] = useState(false);

    useEffect(() => {
        const name = localStorage.getItem('summary');
        console.log(name);
        setMovieSummary(name);
    }, []);

    const handleBookTicketsClick = () => {
        setShowTicketForm(true);
    };

    const handleCancelClick = () => {
        setShowTicketForm(false);
    };

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

        localStorage.setItem('bookingData', JSON.stringify(formData));
        setFormData({
            name: '',
            email: '',
            numberOfTickets: 1,
        });
        setShowTicketForm(false);
    };

    return (
        <div>
            {movieSummary ? (
                <div className='justify-center items-center flex flex-col space-y-4 '>
                    <p className='text-gray-700 w-96 border-2 rounded-md p-4' dangerouslySetInnerHTML={{ __html: movieSummary }} />
                    <Button onClick={handleBookTicketsClick}>Book your tickets here!</Button>
                    {showTicketForm && (
                        <div className="fixed inset-0 flex items-center justify-center">
                            <div className="bg-black bg-opacity-0 absolute">
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
                                <button className="border-2 border-black rounded-md" onClick={handleCancelClick}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Summary;
