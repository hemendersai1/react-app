import React from 'react'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
const Header = (props) => {
  return (
    <header>
      <div className='home-header-container'>

        
        <h1 className='header-logo-text'>TodoX</h1>
      
<button className='new-task-btn'>
  <span><AddRoundedIcon fontSize='large'/></span>Todo</button></div>
    </header>
  )
}

export default Header
