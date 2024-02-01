import React, { useEffect, useState } from 'react'
import { gettingData } from '../api/api_integration';
import { Link } from 'react-router-dom';

function Summary() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await gettingData();
                setData(response);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [])

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {data.map((item, index) => (
                        <div key={index}>
                            <div className=''>
                                {item.show.image && (
                                    <div className='flex justify-between'>
                                        <div>
                                            {item.show.summary && (
                                                <p className='text-gray-700 w-96' dangerouslySetInnerHTML={{ __html: item.show.summary }} />
                                            )}
                                            <h1>
                                                {item.show.name}
                                            </h1>
                                            <h1>
                                                {item.show.rating.average}
                                            </h1>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Summary