import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='title'>Fun Chat</span>
            <div className='user'>
                <img src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg" alt="image" />
                <span className="user_name">my name</span>
                <button className='button' onClick={() => signOut(auth)} ><i className="fa fa-sign-out"></i></button>
            </div>
        </div>
    );
};

export default Navbar;