import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Login = () => {
  const [State, setState] = useState('Sign Up')
  return (
    <div>
      <img  src={assets.logo} alt="" />
      <h1>
        {State === 'Sign Up' ? 'Create Your Account' : ''}
      </h1>
    </div>
  )
}

export default Login
