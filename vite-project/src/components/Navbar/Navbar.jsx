// import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export const MyNavbar = () => (
//   <Navbar bg="blue" expand="lg" className="navbar">
//     <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-toggler'/>
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="ml-auto">
//         <Nav.Link href="#about" className='nav-link'>About</Nav.Link>
//         <Nav.Link href="#experience" className='nav-link'>Experience</Nav.Link>
//         <Nav.Link href="#projects" className='nav-link'>Projects</Nav.Link>
//         <Nav.Link href="#contact" className='nav-link'>Contact</Nav.Link>
//       </Nav>
//     </Navbar.Collapse>
//   </Navbar>
// );

import React from 'react';
import { Navbar, Nav, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.module.css'; 

export const MyNavbar = () => (
  <section className='navbar'>
  <Navbar bg="blue" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto nav-links"> {/* Center links */}
        <Nav.Link href="#experience" className="nav-link"><h10 className='Exp'>Experience</h10></Nav.Link>
        <Nav.Link href="#projects" className="nav-link"><h10 className='projs'>Projects</h10></Nav.Link>
        <Nav.Link href="#contact" className="nav-link"><h10 className='contact'>Contact</h10></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</section>
);









// import React, { useState } from 'react';
// import styles from './Navbar.module.css';
// import { getImageUrl } from '../../utils';  /* importing function from utils.js to import images */

// export const Navbar = () => {
//   /* adding a state to toggle the menu bar */
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className={styles.navbar}>
//       <a className={styles.title} href="/">Portfolio</a>
//       <div className={styles.menu}>
//         <img
//           className={styles.menuBtn}
//           src={menuOpen ? getImageUrl("nav/closeIcon.svg") : getImageUrl("nav/menuIcon.png")}
//           alt="menuButtonIcon"
//           onClick={() => setMenuOpen(!menuOpen)}
//         />
//         <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}>
//           <li><a href="#about">About</a></li>
//           <li><a href="#experience">Experience</a></li>
//           <li><a href="#projects">Projects</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

