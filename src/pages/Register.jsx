import React from 'react'
import Add from '../img/addAvatar.png'

export default function Register() {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='chatName'>Welcome to Chatroom !</span>
                <span className='titleName'>Register form</span>
                <form action='' >
                    <input type="text" className='borer border-[1px]' placeholder='enter your name' />
                    <input type="email" className='borer border-[1px]' placeholder='enter your email' />
                    <input type="password" className='borer border-[1px]' placeholder='enter your password' />
                    <input type="file" id='file' className='fileChoose hidden' placeholder='choose your avatar' />
                    <label htmlFor="file" className='py-[6px] rounded cursor-pointer text-[#9e9e9e] flex text-[#7a7a7a] items-center'>
                        <img src={Add} alt="addImage" className='h-[30px] flex pr-4' />
                        Choose avatar
                    </label>
                    <button className='mt-3'>Sign up</button>
                </form>
                <p>You have account? <a href="">Sign in</a></p>
            </div>
        </div>
    )
}
