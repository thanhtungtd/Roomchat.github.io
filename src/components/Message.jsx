import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Message = ({ message }) => {

    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const ref = useRef()
    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" })
    }, [message]);

    const [date, setDate] = useState(new Date());

    return (
        <div ref={ref}
            className={`message ${message.senderId === currentUser.uid && "owner"}`}>
            <div className='messInfo'>
                <img src=
                    {message.senderId === currentUser.uid
                        ? currentUser.photoURL
                        : data.user.photoURL
                    }
                    alt="" />
            </div>
            <div className='messContent'>
                <p>{message.text}</p>
                {message && <img src={message.img} alt="" />}
                <span className='time'>{date.toLocaleString()}</span>
            </div>
        </div>
    );
};

export default Message;