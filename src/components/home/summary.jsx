import React, { useEffect, useState } from 'react'
import { gettingData } from '../api/api_integration';
import { Link } from 'react-router-dom';

function Summary() {

    const [movieName, setMovieName] = useState('');
    useEffect(() => {
        const name = localStorage.getItem('name');
        setMovieName(name);
    })

    return (
        <div>
            {
                movieName ? (
                    <div>
                        <p className='text-gray-700 w-96' dangerouslySetInnerHTML={{ __html: movieName }} />
                    </div>
                ) : (
                    <p>
                        Loading...
                    </p>
                )

            }
        </div>
    )
}

export default Summary