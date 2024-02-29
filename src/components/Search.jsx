import React, { useContext, useState } from 'react';
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Search = () => {

    const [userName, setUserName] = useState("");
    const [user, setUer] = useState(null);
    const [err, setErr] = useState(false);

    const { currentUser } = useContext(AuthContext);

    const handleSearch = async () => {
        const q = query(collection(db, "users"),
            where("displayName", "==", userName));

        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUer(doc.data());
            })
        } catch (err) {
            setErr(true);
        }
    }

    const handleKey = e => {
        e.code === "Enter" && handleSearch();
    }

    const handleSelectUser = async () => {
        //Check if the conversation already exists
        const combinedId = currentUser.uid > user.uid
            ? currentUser.uid + user.uid
            : user.uid + currentUser.uid;

        try {
            const res = await getDoc(doc(db, "chats", combinedId))

            if (!res.exists()) {
                //create a new chat in collections
                await setDoc(doc(db, "chats", combinedId), { messages: [] });
                //create user chat
                await updateDoc(doc(db, "userChats", currentUser.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    },
                    [combinedId + ".date"]:
                        serverTimestamp()
                });
                await updateDoc(doc(db, "userChats", user.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    },
                    [combinedId + ".date"]:
                        serverTimestamp()
                });
            }
        } catch (err) {
            //
        }

        setUer(null);
        setUserName("");
    }
    return (
        <div className='search' >
            <div className='searchform items-center'>
                <input type="text" className='seek text-gray-600 font-[500]'
                    placeholder='Find a user 🔍'
                    onKeyDown={handleKey} onChange={(e) => setUserName(e.target.value)}
                    value={userName} />
            </div>
            {err && <div className='userChat items-center'>
                <img src="https://vn-test-11.slatic.net/p/26bf5e4c5785e116af9ef52c931a2bd6.png" alt="" />
                <div className='userInfo'>
                    <span>User not found!</span>
                </div>
            </div>}
            {user && <div className='userChat items-center bg-slate-100' onClick={handleSelectUser}>
                <img src={user.photoURL} alt="" />
                <div className='userInfo'>
                    <span>{user.displayName}</span>
                </div>
            </div>}
        </div >
    );
};

export default Search;