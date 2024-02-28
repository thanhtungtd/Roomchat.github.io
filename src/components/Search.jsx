import React, { useState } from 'react';
import { collection, query, where } from 'firebase/firestore';
import { db } from '../firebase';

const Search = () => {

    const [userName, setUserName] = useState("");
    const [user, setUer] = useState(null);
    const [err, setErr] = useState(false);

    const handleSearch = () => {
        const q = query(collection(db, "users"))
    }

    const handleKey = e => {
        e.code === "Enter" && handleSearch();
    }

    return (
        <div className='search' >
            <div className='searchform items-center'>
                <input type="text" className='seek' placeholder='Find a user🔍' onKeyDown={handleKey} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className='userChat'>
                <img src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg" alt="" />
                <div className='userInfo'>
                    <span>Name</span>
                </div>
            </div>
        </div >
    );
};

export default Search;