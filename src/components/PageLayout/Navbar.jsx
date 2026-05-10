import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>EcoSculpt</h1>
            <div className="nav-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Pages</a></li>
                </ul>
            </div>
            <div className="nav-buttons">
                <button className="login-btn">Login</button>
                <button className="signup-btn">Sign Up</button>
            </div>

        </nav>

    )
}

export default Navbar
