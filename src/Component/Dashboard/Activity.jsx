import React from 'react'
import './Activity.css';


const data = [
  { day: 'Mon', bars: ['gray-tall', 'cyan-medium', 'gray-short', 'purple-medium'] },
  { day: 'Tues', bars: ['cyan-tall', 'gray-short', 'purple-tall', 'cyan-short'] },
  { day: 'Wed', bars: ['gray-medium', 'cyan-short', 'purple-short', 'gray-tall'] },
  { day: 'Thurs', bars: ['gray-tall', 'cyan-medium', 'purple-tall', 'gray-medium'] },
  { day: 'Fri', bars: ['cyan-tall', 'purple-tall', 'cyan-medium', 'gray-short'] },
  { day: 'Sat', bars: ['gray-tall', 'cyan-short', 'purple-medium', 'gray-medium'] },
  { day: 'Sun', bars: ['gray-medium', 'cyan-medium', 'gray-short', 'purple-short'] },
];



const Activity = () => {
  return (
    <>
    <div className='activity-cont'>
        <div className='activity-header'>
            <h4>Activity</h4>
            <span className='activity-note'>3 Appointment on this week</span>
        </div>
        <div className='activity-bars'>
            {data.map((item, idx) => (
                <div key={idx} className='day-column'>
                    <div className='bars'>
                        {item.bars.map((height, index) => (
                          <div key={index} className={`bar ${height} ${getColor(index)}`}></div>  
                        ))}
                    </div>
                    <span className='day-label'> {item.day}</span>
                </div>
            ))}
        </div>
    </div>
    </>
  );
};

const getColor = (index) => {
    if(index === 0) return 'bar-gray';
    if(index === 1) return 'bar-blue';
    return 'bar-purple';
}


export default Activity;