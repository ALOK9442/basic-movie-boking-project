import React, { useEffect, useState } from 'react';
import { gettingData } from '../api/api_integration';
import { Link } from 'react-router-dom';
import Button from '../common/button';
import Image from '../common/image';



function Summary() {
    const [movieSummary, setMovieSummary] = useState('');
    const [image, setImage] = useState('');
    const [originalImage, setOriginalImage] = useState('');
    const [showTicketForm, setShowTicketForm] = useState(false);
    const [time, setTime] = useState('');
    const [day, setDay] = useState('');
    const [genres, setGenres] = useState('');

    useEffect(() => {
        const name = localStorage.getItem('summary');
        console.log(name);
        const image = localStorage.getItem('image');
        setImage(image);
        const originalImage = localStorage.getItem('originalImage');
        setOriginalImage(originalImage);
        console.log(originalImage);
        setMovieSummary(name);
        const time = localStorage.getItem('scheduleTime');
        setTime(time);
        const day = localStorage.getItem('scheduleDate');
        setDay(day);
        const genres = localStorage.getItem('genres');
        setGenres(genres);
    }, []);

    const handleBookTicketsClick = () => {
        setShowTicketForm(true);
    };

    const handleCancelClick = () => {
        setShowTicketForm(false);
    };

    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
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
            phoneNumber: '',
            numberOfTickets: 1,
        });
        setShowTicketForm(false);
    };

    return (
        <div>
            {movieSummary ? (
                <div className='justify-around items-center flex sm:flex-row flex-col'>
                    {
                        image && (
                            <Image src={image} alt='movie' className='' />
                        )
                    }
                    <div className='space-y-4 flex flex-col'>
                        <p className='text-gray-700 w-96 border-2 rounded-md p-4' dangerouslySetInnerHTML={{ __html: movieSummary }} />
                        <div className='flex border-2 rounded-md space-x-4'>
                        <div className='space-x-2'>
                            <p>
                                {
                                    time && (
                                        <span className='text-gray-700'>Time: {time}</span>
                                    )
                                }
                            </p>
                            <p>
                                {
                                    day && (
                                        <span className='text-gray-700'>Day: {day}</span>
                                    )
                                }
                            </p>
                            </div>
                            <p>
                                {
                                    genres && (
                                        <span className='text-gray-700'>Genre: {genres}</span>
                                    )
                                }
                            </p>
                        </div>
                        <Button onClick={handleBookTicketsClick}>Book your tickets here!</Button>
                    </div>
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
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">Phone Number:</label>
                                            <input
                                                type="text"
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                value={formData.phoneNumber}
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
                                <button className="border-2 bg-amber-500 border-black rounded-md" onClick={handleCancelClick}>
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
