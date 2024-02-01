import React from 'react';
import { useEffect, useState } from 'react';
import { gettingData } from '../api/api_integration';
import Image from '../common/image';
import './home.css';
import { Link } from 'react-router-dom';
import Button from '../common/button';

function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleClick = (itemName) => {
        console.log('click');
        console.log(itemName);
        localStorage.setItem('name', itemName);

    };

    const handleSummary = (e) => {
        console.log('click');
        console.log(e.summary);
        localStorage.setItem('summary', e.summary);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await gettingData();
                setData(response);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto">
            <div className='items-center flex justify-center'> 
                <h1 className='mb-4 sm:text-5xl text-3xl underline rounded-md hover:bg-slate-500 w-fit p-4'>
                    Movie Lists
                </h1>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {data.map((item, index) => (
                        <div key={index} className="border-2 border-black p-2 hover:bg-slate-700">
                            <Link to="/ticket-booking" onClick={() => handleClick(item.show.name)}>
                                {item.show.image ? (
                                    <Image
                                        src={item.show.image.medium}
                                        alt={item.show.name}
                                        className="w-full object-cover mb-4"
                                    />
                                ) : (
                                    <Image
                                        src="https://via.placeholder.com/210x295?text=No+Image"
                                        alt={item.show.name}
                                        className="w-full object-cover mb-4"
                                    />
                                )}
                            </Link>
                            <div>
                                <h1 className="text-xl font-semibold mb-2">{item.show.name}</h1>
                                <p className="text-gray-500 mb-2">Rating: {
                                    item.show.rating.average ? (
                                        item.show.rating.average
                                    ) : (
                                        <>NA</>
                                    )
                                }</p>
                                <Link to="/summary" onClick={() => handleSummary(item.show)}>
                                    <Button className='mb-2'>Click here for more information</Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
