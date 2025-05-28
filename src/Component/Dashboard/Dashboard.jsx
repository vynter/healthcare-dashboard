import React from 'react'
import './Dashboard.css';
import skel from '../../assets/Skel.png'; 
import Scan from '../../assets/Scan.png';
import Scan1 from '../../assets/Scan1.png';
import Rotate from '../../assets/Rotate.png';
import Zoom from '../../assets/Zoom.png';
const Dashboard = () => {
  return (
    <>
    <div className='Dash-cont'>
    <span className='Dash-span'>Dashboard</span>
    <p className='Dash-p'>This week <i className='p-down'></i> </p>

    <div className='skel-cont'>
        <img src={skel} alt="" />

    </div>
    <div className='scan-cont'>
        <img src={Scan} alt="" />
    </div>
    <div className='scan1'>
        <img src={Scan1} alt="" />
    </div>
    <div className='Rotate'>
        <img src={Rotate} alt="" />
    </div>

    {/* Heart cont */}
    <div className='heart-cont'>
        <span className='heart-p'>❤️  Healthy Heart</span>
    </div>
    {/* leg cont */}
    <div className='leg-cont'>
        <span className='leg-span'>🦵 Healthy Leg</span>
    </div>
        {/* Zoom */}
        <div className='zoom'>
            <img src={Zoom} alt="" />
        </div>
    {/* Lung Card */}
        <div className='lungs-card'>
            <div className='lung-header'>
           <span className='lungs-img'>🫁</span> <span className='lungs-title'>Lungs</span>
            </div>
            <p className='lungs-date'>Date: 26 Okt 2021</p>
            <div className='Progress-bar'>
                <div className='progress-filled'></div>
            </div>
        </div>
        {/* Teeth Card */}
        <div className='teeth-card'>
            <div className='teeth-header'>
           <span className='teeth-img'>🦷</span> <span className='teeth-title'>Teeth</span>
            </div>
            <p className='teeth-date'>Date: 26 Okt 2021</p>
            <div className='progress2-bar'>
                <div className='progress2-filled'></div>
            </div>
        </div>
        {/* Bone Card */}
        <div className='bone-card'>
            <div className='bone-header'>
           <span className='bone-img'>🦴</span> <span className='bone-title'>Bone</span>
            </div>
            <p className='bone-date'>Date: 26 Okt 2021</p>
            <div className='progress3-bar'>
                <div className='progress3-filled'></div>
            </div>
        </div>
        {/* Details */}
        <span className='details'>Details &#129106;</span>

    </div>
    </>
  )
}

export default Dashboard;