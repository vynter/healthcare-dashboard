import React from 'react'
import './Sidebar.css';
import DB from '../../assets/DB.png';
import HI from '../../assets/Hist.png';
import Cal from '../../assets/Calandar.png';
import Appoint from '../../assets/Appoint.png';
import Stat from '../../assets/Statistics.png';
import Chat from '../../assets/Chat.png';
import Phone from '../../assets/Phone.png';
import Set from '../../assets/Setting.png'
const Sidebar = () => {
  return (
    <>
    
    <div className="side-container">
        <div className='head-logo'>
        <span className='logo1'>Health</span><span className='logo2'>care.</span>
         </div>
        <aside className='sidebar'>
            <nav>
            <p className='section-title' style={{textAlign:'left'}}>General</p>
                <ul>
                    <li className='li-blue'> <img src={DB} alt="" /> Dashboard</li>
                    <li style={{color:'GrayText'}} className='HI'> <img src={HI} alt="" />History</li>
                    <li style={{color:'GrayText'}} className='Cal'> <img src={Cal} alt="" /> Calandar</li>
                    <li style={{color:'GrayText'}} className='Appoint'> <img src={Appoint} alt="" />Appointments</li>
                    <li style={{color:'GrayText'}} className='Stat'> <img src={Stat} alt="" />Statistics</li>
                </ul>

                <p className='section-sub'>Tools</p>
                <ul>
                    <li className='Chat'> <img src={Chat} alt="" />Chat</li>
                    <li className='Support'> <img src={Phone} alt="" />Support</li>
                </ul>
                
                <ul className='bottom-setting'>
                    <li className='Sett'> <img src={Set} alt="" />Setting</li>
                </ul>
            </nav>
        </aside>    
    </div>
    </>
  )
}

export default Sidebar