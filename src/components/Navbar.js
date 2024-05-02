import { NavLink } from "react-router-dom";
import '../styles/Navbar.css';
import React, { useState } from 'react';


// function Navbar() {
//     return (
//       <div className="navbar">
//         <NavLink to="/" className="nav-link" activeClassName="active" style={{borderColor: "#00933C"}}>Home</NavLink>
//         <NavLink to="/about" className="nav-link" activeClassName="active" style={{borderColor: "#EE352E"}}>About</NavLink>
//         <NavLink to="/projects" className="nav-link" activeClassName="active" style={{borderColor: "#0039A6"}}>Projects</NavLink>
//         <NavLink to="/contact" className="nav-link" activeClassName="active" style={{borderColor: "#FCCC0A"}}>Contact</NavLink>
//       </div>
//     );
//   }
  
//   export default Navbar;

function Navbar() {
    const [activeLink, setActiveLink] = useState(null);
  
    const handleSetActiveLink = (link) => {
      setActiveLink(link);
    };
  
    return (
      <div className="navbar">
        <NavLink to="/" className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => handleSetActiveLink('home')}>Home</NavLink>
        <NavLink to="/about" className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} onClick={() => handleSetActiveLink('about')}>About</NavLink>
        <NavLink to="/projects" className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`} onClick={() => handleSetActiveLink('projects')}>Projects</NavLink>
        <NavLink to="/contact" className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} onClick={() => handleSetActiveLink('contact')}>Contact</NavLink>
      </div>
    );
  }
  
  export default Navbar;
  


  

