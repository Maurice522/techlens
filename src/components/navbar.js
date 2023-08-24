import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

import Button from './button'
import "./navbar.css"

function Navbar() {
    const [open, setOpen] = useState(false);
    const [drop, setDrop] = useState(false);
    const navigate=useNavigate();
    const options = [
        { value: 'Technology news and reviews', label: 'Technology news and reviews' },
        { value: 'Product reviews', label: 'Product reviews' },
        { value: 'Personal stories', label: 'Personal stories' },
        { value: 'Industry analysis', label: 'Industry analysis' }
      ]
    return (
        <nav className="navbar navbar-expand-lg   " style={{ backgroundColor: "#112D4E", color: "#F9F7F7", paddingTop: "20px" }}>
            <div className='container'>
                <a className="navbar-brand" style={{ fontSize: "24px", textTransform: "uppercase", letterSpacing: "4px", color: "#ffffff", fontWeight: "700", fontFamily: 'Kanit, sans-serif' }} href="/">Tech-Lens</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon" onClick={() => setOpen(!open)}></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ display: open ? "unset" : "none" }}>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" style={{ marginLeft: "20px", textTransform: "uppercase", fontSize: "18px", letterSpacing: '1px', color: "#a5aacf" }} href="/">Explore </a>
                        </li>
                        
                       {/* <li className="nav-item active">
                            <a className="nav-link" style={{ marginLeft: "20px", textTransform: "uppercase", fontSize: "18px", letterSpacing: '1px', color: "#a5aacf" }} href="#" onClick={() => setDrop(!drop)}>Blogs</a>
                            {drop ? (
                                
                                <div className="menu">
                                  {  options.map((value,index)=>(
                                        <div className="menu-item" onClick={()=>navigate(`/blog/${value.value}`)}>
                                        {value.value}
                                    </div>)
                                    )
                                  }
                                    
                                    
                                </div>
                            ) : null}
                                </li>*/}
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" style={{
                                    background: "none",
                                    border: "none",
                                    fontSize: "17px",
                                    paddingTop: "8px",
                                    fontWeight: "600",
                                    paddingLeft: "6px",
                                    color: "#a5aacf",
                                }} >
                                    BLOGS
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {options.map((value, index) => (
                                        <Dropdown.Item href={`/blog/${value.value}`}>{value.value}</Dropdown.Item>)
                                    )
                                    }


                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li className="nav-item active">
                            <Button text="Contact" />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar