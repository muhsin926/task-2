import React from 'react'
import './style.css';
import {MdDashboard} from 'react-icons/md';
import {FaPowerOff} from 'react-icons/fa'

const  NAV_ITEMS= ['Dashboard','Perks', 'Addons', 'FAQ','Support']

const Sidebar = () => {
  return (
    <>
    <div className='profileBox'>
        <div className='profilePicture'></div>
        <h4>Ram Mohan</h4>
        <p>rammohan2@gmail.com</p>
    </div>
    <div style={{height: '82%', display: 'flex', flexDirection:'column'}}>
        <div className='navBox'>
            {NAV_ITEMS.map((item,i) => (
                <div key={item} style={{backgroundColor: i === 0 && 'rgb(121 192 255)'}} className='navButton'><MdDashboard color='rgb(0 132 249)'/> {item}</div>
            ))}
        </div>
        <div className='logout'>
            Logout <FaPowerOff/>
        </div>
    </div>
    </>
  )
}

export default Sidebar