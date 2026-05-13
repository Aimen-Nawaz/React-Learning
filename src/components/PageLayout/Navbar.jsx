import React from 'react'
import {navbar ,navLinks,navButtons,loginBtn,signupBtn} from '../../styel/Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={navbar}>
            <h1>EcoSculpt</h1>
            <div className={navLinks}   >
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Pages</a></li>
                </ul>
            </div>
            <div className={navButtons}>
                <button className={loginBtn}>Login</button>
                <button className={signupBtn}>Sign Up</button>
            </div>

        </nav>

    )
}

export default Navbar
