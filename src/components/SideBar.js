import React from 'react'
import Logo from '../assets/BottleCap_Logo.svg'
import '../styles/Sidebar.scss'
import Hand from '../assets/hand.png'

/**
* @author
* @function SideBar
**/

const SideBar = (props) => {
  return(
    <div id='SideBar_wrapper'>
        <div id='logo'>    
        <img src={Logo} alt='Logo' />   
        </div>
        <div id='menu_wrapper'> 
        
       <div>
       Hello Member! Welcome to BottleCap's Beta Portal
       <img style={{width: '20px'}} src={Hand} alt='' />
      </div>
        
        </div>
    </div>
   )

 }

export default SideBar