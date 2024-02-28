import React, { useState } from 'react'
import Add from '../img/addAvatar.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from '../firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";


export default function Register() {

    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);

            // const storage = getStorage();
            const storageRef = ref(storage, displayName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            //register
            uploadTask.on(
                (error) => {
                    setErr(true);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        });
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        });
                        await setDoc(doc(db, "userChats", res.user.uid), {
                        });
                        navigate("/");
                    });
                }
            );
        } catch (error) {
            setErr(true);
        }



    }

    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='chatName'>Welcome to Chatroom !</span>
                <span className='titleName'>Register form</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" className='borer border-[1px]' placeholder='enter your name' />
                    <input type="email" className='borer border-[1px]' placeholder='enter your email' />
                    <input type="password" className='borer border-[1px]' placeholder='enter your password' />
                    <input type="file" className='hidden' id='file' />
                    <label htmlFor="file" className='py-[6px] rounded cursor-pointer text-[#898989] flex items-center'>
                        <img src={Add} alt="addImage" className='h-[30px] flex pr-4' />
                        Choose avatar
                    </label>
                    <button className='mt-3'>Sign up</button>
                    {err && <span className='text-red-600 text-center px-2 bg-red-300 animate-pulse rounded'>Your information seems wrong !</span>}
                </form>
                <p>You have account? <Link to="/login">Sign in</Link></p>
            </div>
        </div>
    )
}
