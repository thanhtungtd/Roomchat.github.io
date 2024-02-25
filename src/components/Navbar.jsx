import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='title'>Fun chat</span>
            <div className='user'>
                <img src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg" alt="image" />
                <span>name</span>
                <button className='button'>Log out</button>
            </div>
        </div>
    );
};

export default Navbar;