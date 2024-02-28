import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function Login() {

    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (error) {
            setErr(true);
        }
    }

    return (
        <div>
            <div className='formContainer login'>
                <div className='formWrapper'>
                    <span className='chatName'>Welcome to Chatroom !</span>
                    <span className='titleName'>Login form</span>
                    <form action='' onSubmit={handleSubmit}>
                        <input type="email" className='borer border-[1px]' placeholder='enter your email' />
                        <input type="password" className='borer border-[1px]' placeholder='enter your password' />
                        <input type="file" id='file' className='fileChoose hidden' placeholder='choose your avatar' />
                        <button className='mt-3'>Sign in</button>
                        {err && <span className='text-red-600 text-center px-2 bg-red-300 animate-pulse rounded'>Your information seems wrong !</span>}
                    </form>
                    <p>I don't have account? <Link to="/register">Sign up</Link></p>
                </div>
            </div>
        </div>
    )
}
