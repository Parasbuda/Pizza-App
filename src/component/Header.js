import React from 'react'
import "./Header.css"
import Logo from "../assets/pizza logo.png"
const Header = () => {
    return (
        <div className="block">
            <div className="pizza">
                <img src={Logo} alt="logo" height="40px" />
                <div className="text">
                    Pizza Customization
                </div>
                </div>
        </div>
    )
}

export default Header
