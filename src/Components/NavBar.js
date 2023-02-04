import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../assests/img/logo.svg';
import navIcon1 from '../assests/img/nav-Icon1.svg';
import navIcon2 from '../assests/img/nav-Icon2.svg';
import navIcon3 from '../assests/img/nav-Icon3.svg';




function NavBar() {
const [activeLink, setActiveLink] = useState('home');
const [scrolled, setScrolled] = useState(false);

// this use Effect is detects when users scroll and changes the background
// scrollY position is the hieght of the scroll 
useEffect(() => {
const onScroll = () => {
    if (window.scrollY > 50) {
        setScrolled(true);
    } else {
        setScrolled(false);
    }
}
// this event listener is triggered on scroll and uses the function onScroll when a scroll event happens
window.addEventListener("scroll", onScroll)


return () => window.removeEventListener('scroll', onScroll)
}, [])


const onUpdateActiveLink = (value) => {
setActiveLink(value);
}


  return (
    <Navbar  expand="lg" className={scrolled ? "scrolled" : "" }>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
        <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navebar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navebar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>skills</Nav.Link>       
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navebar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>projects</Nav.Link>       
          </Nav>
          <span className='navbar-text'>
            <div className="social -icon">
                <a href="#"><img src={navIcon1} alt="navIcon1"/></a>
                <a href="#"><img src={navIcon2} alt="navIcon2"/></a>
                <a href="#"><img src={navIcon3} alt="navIcon3"/></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Lets connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar();