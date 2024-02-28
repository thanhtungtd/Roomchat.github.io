import React, { useContext } from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {

    const { currentUser } = useContext(AuthContext);
    console.log(currentUser)

    return (
        <div className='navbar'>
            <span className='title'>Fun Chat</span>
            <div className='user'>
                <img src={currentUser.photoURL} alt="image" />
                <span className="user_name">{currentUser.displayName}</span>
                <button className='button' onClick={() => signOut(auth)} ><i className="fa fa-sign-out"></i></button>
            </div>
        </div>
    );
};

export default Navbar;