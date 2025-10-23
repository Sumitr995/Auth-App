import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'

const Home = () => {
  return (
    <div className='bg-[url("/bg_img.png")]'>
      <h1>
        <Navbar/>
        <Header/>
      </h1>
    </div>
  )
}

export default Home
