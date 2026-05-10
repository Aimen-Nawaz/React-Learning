import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="Info">
                    '  <h2>EcoSculpt</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, magnam rem. Porro iusto voluptas ipsum mollitia libero omnis facilis eius dolore tempora provident, culpa minus vel aperiam dolores autem aliquam?</p>
                </div>

                <div className="Contact">
                    <h2>Contact us</h2>
                    <p>Email: info@ecosculpt.com</p>
                    <p>Phone: +1 234 567 890</p>
                    <p>Address: 123 Green Street, Cityville, Country</p>
                </div>

                <div className="social-media">
                    <h2>Quick links</h2>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div className="Follow-us">
                    <h2>Follow us</h2>

                        <div className="icons">
                            <FaFacebookF />
                            <FaTwitter />
                            <FaInstagram />
                            <FaLinkedinIn />
                        </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
