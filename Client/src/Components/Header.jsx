import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex items-center justify-center flex-col h-[70vh] font-semibold '>
            <img className='h-38 w-38 ' src={assets.new_header} alt="header_img" />
            <div className='flex gap-1 items-center text-2xl font-semibold '>
                <h1>Hey Developer</h1>
                <img className='h-8' src={assets.hand_wave} alt="wave" />
            </div>

            <h1 className='text-3xl font-semibold'>Welcome to my Auth app</h1>
            <p>
                lets start with quick product tour and start our journey together !
            </p>
            <button className='flex items-center gap-2 border border-gray-500 px-6 py-2 cursor-pointer rounded-full my-5 hover:bg-gray-100 transition-all'>Get Started <img src={assets.arrow_icon} alt="arrow" /></button>
        </div>
    )
}

export default Header
