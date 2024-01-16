import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function FormVerification() {
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [isVerified, setIsVerified] = useState(false); // Flag to track verification status
    const { token } = useParams();

    useEffect(() => {
        const verifyReservation = async () => {
            if (isVerified) return; // Prevent multiple requests

            try {
                const response = await axios.get(`http://localhost:5000/api/reservations/verify/${token}`);
                setMessage('Email verified successfully');
                console.log(response.data);
                setIsError(false);
                setIsVerified(true); // Set verification flag to true
            } catch (error) {
                console.log(error);
                if (error.response && error.response.data) {
                    // Display a more specific error message from the server
                    setMessage(error.response.data.message);
                } else {
                    setMessage('Error verifying email, please try again.');
                }
                setIsError(true);
            }
        };

        if (token && !isVerified) {
            verifyReservation();
        }
    }, [token, isVerified]);

    return (
        <div className='h-screen bg-red-300 flex justify-center items-center'>
            {message}
        </div>
    );
}
