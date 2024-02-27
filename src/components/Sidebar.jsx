import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Chatroom from './Chatroom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Navbar></Navbar>
            <Search></Search>
            <Chatroom></Chatroom>
        </div>
    );
};

export default Sidebar;
