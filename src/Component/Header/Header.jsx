import React from 'react'
import './Header.css';
import search from '../../assets/search.png';
import notifi from '../../assets/notifi.jpg';
import avathar from '../../assets/Avathar.webp';
const Header = () => {
  return (
    <>
    <header className='header'>

    {/* <div className='head-logo'>
        <span className='logo1'>Health</span><span className='logo2'>care.</span>
    </div> */}
    {/* Searchbar */}
    <div className='searchbar'>    
    <img src={search} alt="" />
    <p style={{color: 'GrayText',}} className='search-p'>Search</p>
    </div>
    {/* notifi */}

    <div className='notifi'>
        <img src={notifi} alt=""/>
    </div>
    {/* Avathar */}

    <div className='avathar-cont'>
        <img src={avathar} alt="" className='ava-img'/>

    </div>

    {/* plus */}

    <div className='plus'>
        <p>+</p>
    </div>

   

    </header>
    </>
  )
}

export default Header;