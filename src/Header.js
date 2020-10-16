import React, { useState } from 'react'
import MenuIcon from '@material-ui//icons/Menu'
import SearchIcon from '@material-ui//icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import './Header.css'
import { Link } from 'react-router-dom'

function Header () {
  const [inputSearch, setInputSearch] = useState('')

  return (
    <div className='header'>
      <div className='header_left'>
        <MenuIcon />
        <Link to='/'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'
            className='header_logo'
            alt=''
          />
        </Link>
      </div>
      <div className='header_input'>
        <input
          value={inputSearch}
          onChange={e => {
            setInputSearch(e.target.value)
          }}
          type='text'
          placeholder='Search'
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className='header_inputButton' />
        </Link>
      </div>

      <div className='header_icons'>
        <VideoCallIcon className='header_icon' />
        <AppsIcon className='header_icon' />
        <NotificationIcon className='header_icon' />
        <Avatar
          className='header_icon'
          alt='icon'
          src={`https://avatars3.githubusercontent.com/u/55136047?s=400&v=4`}
        />
      </div>
    </div>
  )
}

export default Header
