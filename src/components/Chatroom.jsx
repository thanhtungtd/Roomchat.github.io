import React, { useContext, useEffect, useState } from 'react';
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from '../context/AuthContext';
import { db } from '../firebase';

const Chatroom = () => {

    const [chats, setChats] = useState([]);
    const { currentUser } = useContext(AuthContext)

    useEffect(() => {
        const getChats = () => {

            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data());
            });
            return () => {
                unsub();
            }
        };
        currentUser.uid && getChats();
    }, [currentUser.uid]);
    console.log(Object.entries(chats));
    return (
        <div className='chatroom'>
            {Object.entries(chats)?.map((chat) => (
                <div className='userChat' key={chat[0]}>
                    <img src={chat[1].userInfo.photoURL} alt="" />
                    <div className='userInfo'>
                        <span>{chat[1].userInfo.displayName}</span>
                        <p className='preview'>{chat[1].userInfo.lastMessage?.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Chatroom;