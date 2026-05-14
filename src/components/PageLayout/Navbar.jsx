import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import {
    navbar,
    navLinks,
    navButtons,
    loginBtn,
    signupBtn,
    menuToggle,
    sideMenu,
    activeMenu
} from '../../styel/Navbar.module.css'

import { Link } from 'react-router-dom'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [window.innerWidth]);

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    return (
        <>
            <nav className={navbar}>

                <h1>EcoSculpt</h1>

                {isMobile ? <div>
                    <button
                        className={menuToggle}
                        onClick={toggleMenu}
                        aria-label="Toggle Navigation"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                    :
                    <div className={`${navLinks} ${isOpen ? activeMenu : ''}`}>

                        <ul>
                            <li><Link to="/" >Home</Link></li>
                            <li><Link to="/about" >About</Link></li>
                            {/* <li><Link to="/choose" >Choose</Link></li> */}
                            <li><Link to="/services" >Services</Link></li>
                            <li><Link to="/pricing" >Pricing</Link></li>
                            <li><Link to="/gallery" >Gallery</Link></li>
                            <li><Link to="/testimonial" >Testimonial</Link></li>
                            {/* <li><Link to="/faq" >FAQ</Link></li> */}
                            {/* <li><Link to="/blog" >Blog</Link></li> */}
                            <li><Link to="/contact-us" >Contact</Link></li>
                        </ul>

                        <div className={navButtons}>
                            <button className={loginBtn} onClick={closeMenu}>Login</button>
                            <button className={signupBtn} onClick={closeMenu}>Sign Up</button>
                        </div>

                    </div>
                }




            </nav>
            {isOpen && <div className={`${sideMenu} ${isOpen ? activeMenu : ''}`}>

                <ul>
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                    <li><Link to="/choose" onClick={closeMenu}>Choose</Link></li>
                    <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
                    <li><Link to="/pricing" onClick={closeMenu}>Pricing</Link></li>
                    <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
                    <li><Link to="/testimonial" onClick={closeMenu}>Testimonial</Link></li>
                    <li><Link to="/faq" onClick={closeMenu}>FAQ</Link></li>
                    <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
                    <li><Link to="/contact-us" onClick={closeMenu}>Contact</Link></li>
                </ul>

                <div className={navButtons}>
                    <button className={loginBtn} onClick={closeMenu}>Login</button>
                    <button className={signupBtn} onClick={closeMenu}>Sign Up</button>
                </div>

            </div>
            }
        </>

    )
}

export default Navbar