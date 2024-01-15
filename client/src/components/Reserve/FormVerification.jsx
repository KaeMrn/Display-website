import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function FormVerification({token}){
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    useEffect(() =>{
        const verifyReservation = async() =>{
        try{
            await axios.get(`http://localhost:5173/api/reservations/verify/${token}`);
            setMessage('Email verified successfully');
            setIsError(false);

        } catch (error){
            setMessage('Error verifying email, please try again.');
            setIsError(true);s

        }
    };
    if (token) {
        verifyReservation();
    }
    },[token]);


    return(
        <div className='h-screen bg-red-300 flex justify-center items-center'>
            {message}
        </div>
    )
}