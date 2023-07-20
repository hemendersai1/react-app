import React from 'react'
import { Link } from "react-router-dom";
const LoginCard = () => {
  return (
    <div>
      <div className='login-card-container'>
        <div><h1 className='login-heading'>TodoX</h1></div>
        <form>
        <input className='login-inputs' type="text" placeholder='username' />
        <input className='login-inputs' type="password" placeholder='password' />
        <Link to="/" className='login-link'><button className='login-button'type='submit'>Login</button></Link>
        
        </form>
      </div>
    </div>
  )
}

export default LoginCard
