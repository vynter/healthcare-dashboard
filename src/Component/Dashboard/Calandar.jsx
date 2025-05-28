import React from 'react'
import './Calandar.css';
const Calandar = () => {
  return (
    <>
    <div className='caln-cont'>
    <span className='span-MY'>Ocotber 2021</span>
    <span className='arrow-left'>&#129056;</span><span className='arrow-right'> &#129058; </span>
  
    
    {/* table */}

    <div className=''>
        <div class="column-highlight"></div>
        <table className='caln-table'>
            <tr style={{textAlign:'center', fontSize:'0.9rem', fontWeight:'0.1rem'}}>
                <th style={{color:'#0c164e'}}>Mon</th>
                <th className='tues-cont' style={{color:'#0c164e'}}>Tues</th>
                <th style={{color:'#0c164e'}}>Wed</th>
                <th style={{color:'#0c164e'}}>Thur</th>
                <th style={{color:'#0c164e'}}>Fri</th>
                <th style={{color:'#0c164e'}}>Sat</th>
                <th style={{color:'GrayText'}}>Sun</th>   
            </tr>
            <tr className='caln-num' style={{textAlign:'center', fontSize:'1.2rem', fontWeight:'bolder'}}>
                <td style={{color:'#0c164e'}}>25</td>
                <td style={{color:'#0c164e'}}>26</td>
                <td style={{color:'#0c164e'}}>27</td>
                <td style={{color:'#0c164e'}}>28</td>
                <td style={{color:'#0c164e'}}>29</td>
                <td style={{color:'#0c164e'}}>30</td>
                <td style={{color:'GrayText'}}>31</td>
            </tr>
            <tr style={{textAlign:'center'}}>
                <td style={{fontSize:'0.7rem',color:'#0c164e' }}>10:00</td>
                <td style={{fontSize:'0.7rem',color:'#0c164e'}}>08:00</td>
                <td style={{fontSize:'0.7rem',color:'#0c164e'}}>12:00</td>
                <td style={{fontSize:'0.7rem',color:'#0c164e'}}>10:00</td>
                <td style={{fontSize:'2rem',color:'#0c164e'}}>-</td>
                <td>
                <div className="pill-multi">
                    <div className="pill-item">
                        <span className="time">12:00</span>
                        <span className="dot"></span>
                    </div>
                    <div className="pill-item">
                        <span className="time1">09:00</span>
                        <span className="dot"></span>
                    </div>
                </div>
                </td>
            </tr>
            <tr style={{textAlign:'center'}}>
                <td style={{fontSize:'0.7rem',color:'#0c164e'}}>11:00</td>
                <td className='time-pill'style={{fontSize:'0.7rem',color:'#0c164e'}}>09:00</td>
                <td style={{fontSize:'2rem',color:'#0c164e'}}>-</td>
                <td>
                    <div className='single-pill'>
                     <div className='pill-item'>
                        <span className='time'>11:00</span>
                        <span class="dot"></span>
                    </div>
                    </div>
                    </td>
                <td style={{fontSize:'0.7rem',color:'#0c164e'}}>14:00</td>
                <td style={{fontSize:'0.7rem',color:'#0c164e'}}>14:00</td>
                <td style={{color:'GrayText',fontSize:'0.7rem'}}>10:00</td>
            </tr>
            <tr style={{textAlign:'center'}}>
                <td style={{fontSize:'0.7rem',color:'#0c164e'}}>12:00</td>
                <td style={{fontSize:'0.7rem',color:'#0c164e'}}>10:00</td>
                <td style={{fontSize:'0.7rem',color:'#0c164e'}}>13:00</td>
                <td style={{fontSize:'2rem',color:'#0c164e'}}>-</td>
                <td style={{fontSize:'0.7rem',color:'#0c164e'}}>16:00</td>
                <td style={{fontSize:'0.7rem',color:'#0c164e'}}>15:00</td>
                <td style={{color:'GrayText',fontSize:'0.7rem'}}>11:00</td>  

            </tr>
        </table>
            {/* Dent-card */}
        <div>
             <div className='dent-card'>
            <div className='dent-header'>
           <span className='dent-title'>Dentist</span> <span className='dent-img'>🦷</span>
            </div>
            <p className='dent-date'>09:00-11:00</p>
            <p className='dent-doc'>Dr.Cameron Williamson</p>
        </div>
        </div>
            {/* Arm-card */}
        <div className='arm-card'>
            <div className='arm-header'>
           <span className='arm-title'>Physiotheraphy Appointment</span> <span className='dent-img'>💪</span>
            </div>
            <p className='arm-date'>09:00-11:00</p>
            <p className='arm-doc'>Dr.Cameron Williamson</p>
        </div>

        {/* Shedule */}
        <p className='shedule'> The Upcoming Shedule</p>
        <p className='thurs'>On Thursday</p>
        {/* HCC */}
        <div className='hcc-card'>
            <div className='hcc-header'>
           <span className='hcc-title'>Health checkup complete</span> <span className='hcc-img'>💉</span>
            </div>
           <span className='hcc-date'>11:00 AM</span>
        </div>

        {/* Eye */}
        <div className='eye-card'>
            <div className='eye-header'>
           <span className='eye-title'>Opthalmologist</span><span className='eye-img'>👁️</span>
            </div>
           <p className='eye-date'>14:00 PM</p>
        </div>
        <p className='sat'>On Saturday</p>
        {/* cardio card */}
        <div className='cardio-card'>
            <div className='cardio-header'>
           <span className='cardio-title'>Cardiologist</span><span className='cardio-img'>❤️</span>
            </div>
           <p className='cardio-date'>14:00 PM</p>
        </div>

        {/* nuero */}
         <div className='neuro-card'>
            <div className='neuro-header'>
           <span className='neuro-title'>Neurologist</span><span className='neuro-img'>👨‍⚕️</span>
            </div>
           <p className='neuro-date'>14:00 PM</p>
        </div>


    </div>
    </div>
    </>
  )
}

export default Calandar;






