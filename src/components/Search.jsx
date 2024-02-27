import React from 'react';

const Search = () => {
    return (
        <div className='search'>
            <div className='searchform'>
                <input type="text" className='seek' placeholder='Find a user' />
            </div>
            <div className='userChat'>
                <img src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg" alt="" />
                <div className='userInfo'>
                    <span>Name</span>
                </div>

            </div>
        </div>
    );
};

export default Search;