import React from 'react';
import home from '../images/home.svg';
import info from '../images/info.svg';
import notification from '../images/notification.svg';
import user from '../images/user.svg';

const Navbar = () => {
    
  return (
   <header>
    <h3 className='logo'>
    TravelMedia.in
    </h3>
    <div className='middle'>
        <span><img src={home} alt="home" /></span>
        <span><img src={notification} alt="notification" /></span>
        <span><img src={info} alt="info" /></span>
        <span><img src={user} alt="user" /></span>
    </div>

   </header>
  )
}

export default Navbar;