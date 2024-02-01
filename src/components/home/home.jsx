import React from 'react';
import { useEffect, useState } from 'react'
import { gettingData } from '../api/api_integration';
import Image from '../common/image';
import './home.css';

function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await gettingData();
                // const ans = await response.json();
                console.log(response[0].show.language);
                setData(response);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    console.log(data);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {data.map((item, index) => (
                        <div key={index}>
                            <div className='flex items-center'>
                                {item.show.image && (
                                    <div>
                                    <Image src={item.show.image.medium} alt={`item.show.name`} 
                                    />

                                    <h1>
                                        {item.show.name}
                                    </h1>
                                   <h1>
                                   {item.show.rating.average}
                                   </h1>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                    <h1 className='text-bold text-amber-500'>Home</h1>
                </div>
            )}
        </div>
    )
}

export default Home