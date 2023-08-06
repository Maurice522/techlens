import React from 'react'
import Button from './button'
import "./navbar.css"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg   " style={{backgroundColor:"#242145", color:"#F9F7F7", paddingTop:"20px"}}>
        <div className='container'>
        <a className="navbar-brand" style={{fontSize:"24px", textTransform:"uppercase", letterSpacing:"4px",color:"#ffffff", fontWeight:"700", fontFamily: 'Kanit, sans-serif'}} href="/">Tech-Lens</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" style={{marginLeft:"20px", textTransform:"uppercase", fontSize:"18px", letterSpacing:'1px',color:"#a5aacf"}} href="#">Explore </a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" style={{marginLeft:"20px", textTransform:"uppercase", fontSize:"18px", letterSpacing:'1px',color:"#a5aacf"}} href="#">Software Dev</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" style={{marginLeft:"20px", textTransform:"uppercase", fontSize:"18px", letterSpacing:'1px',color:"#a5aacf"}} href="#">Cloud</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" style={{marginLeft:"20px", textTransform:"uppercase", fontSize:"18px", letterSpacing:'1px',color:"#a5aacf"}} href="#">IT Ops </a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" style={{marginLeft:"20px", textTransform:"uppercase", fontSize:"18px", letterSpacing:'1px',color:"#a5aacf"}} href="#">Data </a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" style={{marginLeft:"20px", textTransform:"uppercase", fontSize:"18px", letterSpacing:'1px',color:"#a5aacf"}} href="#">Security </a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" style={{marginLeft:"20px", textTransform:"uppercase", fontSize:"18px", letterSpacing:'1px',color:"#a5aacf"}} href="#">Leadership </a>
            </li>
            <li className="nav-item active">
                <Button text="Contact"/>
            </li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default Navbar