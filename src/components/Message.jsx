import React from 'react';

const Message = () => {
    return (
        <div className='message owner'>
            <div className='messInfo'>
                <img src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg" alt="" />
            </div>
            <div className='messContent'>
                <p>Hello, I'm from DoraAI</p>
                <img src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg" alt="" />
                <span className='time'>just now</span>
            </div>
        </div>
    );
};

export default Message;