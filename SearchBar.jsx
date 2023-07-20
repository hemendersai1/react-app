import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
const SearchBar = () => {
  return (
    <div className='search-container'>
     <input type="text" placeholder='Search here...' className='search-bar'/>
     <div className='search-icon'><SearchRoundedIcon fontSize='large' /></div>
    </div>
  )
}

export default SearchBar
