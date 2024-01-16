import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function FormVerification() {
    const { token } = useParams();
    const [message, setMessage] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/reservations/verify/${token}`)
            .then(response => {
                console.log('Verification successful:', response.data);
                setMessage('Email has been successfully verified!');
            })
            .catch(error => {
                console.error('Verification failed:', error);

            });
    }, [token]); // Dependency array with token ensures this runs only once per token

    return (
        <div className='h-screen bg-red-300 flex justify-center items-center'>
            {message}
        </div>
    );
}
