import React, { useContext, useState } from 'react';
import addImg from '../img/addImage.png';
import { ChatContext } from '../context/ChatContext';
import { AuthContext } from '../context/AuthContext';
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const Input = () => {
    const [text, setText] = useState("");
    const [img, setImg] = useState(null);

    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const handleSend = async () => {
        if (img) {
            const storageRef = ref(storage, uuid());
            const uploadTask = uploadBytesResumable(storageRef, img);

            uploadTask.on(
                (error) => {
                    ///
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateDoc(doc(db, "chats", data.chatId), {
                            messages: arrayUnion({
                                id: uuid(),
                                text,
                                senderId: currentUser.uid,
                                date: Timestamp.now(),
                                img: downloadURL
                            })
                        })
                    });
                }
            );
        } else {
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now()
                })
            })
        }

    };

    return (
        <div className='inputChat'>
            <input type="text" className='input' placeholder='type a message ...'
                onChange={(e) => setText(e.target.value)}
                value={text} />
            <div className='send'>
                <input type="file" id='file' className='hidden'
                    onChange={(e) => setImg(e.target.files[0])} />
                <label htmlFor='file' className='size-[32px] cursor-pointer mr-2'>
                    <img src={addImg} alt="" className='w-full' />
                </label>

                <button onClick={handleSend}><i className="fa-solid fa-paper-plane"></i></button>
            </div>

        </div>
    );
};

export default Input;