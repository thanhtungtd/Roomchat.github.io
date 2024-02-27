import React from 'react';

const Chatroom = () => {
    return (
        <div className='chatroom'>
            <div className='userChat'>
                <img src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg" alt="" />
                <div className='userInfo'>
                    <span>Name</span>
                    <p className='preview'>hello</p>
                </div>
            </div>
            <div className='userChat'>
                <img src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg" alt="" />
                <div className='userInfo'>
                    <span>Name</span>
                    <p className='preview'>hello</p>
                </div>
            </div>
        </div>
    );
};

export default Chatroom;