import React, { useContext, useEffect, useState } from 'react';
import Message from './Message';
import { ChatContext } from '../context/ChatContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const Messagess = () => {
    const { data } = useContext(ChatContext);
    const [messages, setMessages] = useState([]);  

    useEffect(() => {
        const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().messages);
        });
        return () => {
            unSub();
        }
    }, [data.chatId]);

    return (
        <div className='messages'>
            {messages.map(mes => {
                <Message message={mes} key={mes.Id}></Message>
            })}
        </div>
    );
};

export default Messagess;