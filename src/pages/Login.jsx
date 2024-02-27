import React from 'react'

export default function Login() {
    return (
        <div>
            <div className='formContainer login'>
                <div className='formWrapper'>
                    <span className='chatName'>Welcome to Chatroom !</span>
                    <span className='titleName'>Login form</span>
                    <form action='' >
                        <input type="email" className='borer border-[1px]' placeholder='enter your email' />
                        <input type="password" className='borer border-[1px]' placeholder='enter your password' />
                        <input type="file" id='file' className='fileChoose hidden' placeholder='choose your avatar' />
                        <button className='mt-3'>Sign in</button>
                    </form>
                    <p>I don't have account? <a href="">Sign up</a></p>
                </div>
            </div>
        </div>
    )
}
