import React from 'react';
import addImg from '../img/addImage.png';

const Input = () => {
    return (
        <div className='inputChat'>
            <input type="text" className='input' placeholder='type a message ...' />
            <div className='send'>
                <input type="file" id='file' className='hidden' />
                <label htmlFor='file' className='size-[32px] cursor-pointer mr-2'>
                    <img src={addImg} alt="" className='w-full' />
                </label>

                <button><i className="fa-solid fa-paper-plane"></i></button>
            </div>

        </div>
    );
};

export default Input;