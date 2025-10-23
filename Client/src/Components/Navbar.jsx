import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className='flex justify-between items-center w-full px-8 py-8 pt-3 pb-3'>
      <img src={assets.logo} alt="" className='w-28 sm:w-32' />
      <button onClick={()=>navigate('/login')}
      className='flex items-center gap-2 border border-gray-500 px-6 py-2 cursor-pointer rounded-full hover:bg-gray-100 transition-all'>Login <img src={assets.arrow_icon} alt="arrow" /></button>
    </div>
  )
}

export default Navbar;
