import React, { useContext } from 'react';
import Messagess from './Messagess';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
    const { data } = useContext(ChatContext);
    return (
        <div className='chat'>
            <div className='chatInfo'>
                <span>{data.user?.displayName}</span>
                <div className='chatIcons' style={{ color: '#999' }}>
                    <i className="fa-solid fa-video"></i>
                    <i className="fa-solid fa-user-plus"></i>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>
            </div>
            <Messagess></Messagess>
            <Input></Input>
        </div>
    );
};

export default Chat;