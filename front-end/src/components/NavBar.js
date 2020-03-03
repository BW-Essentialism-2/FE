import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({isLoggedIn}) => {
    return (
        <div className="nav">
            <nav>
                <div className="leftCont">
                    <img src={require("../logo.png")} alt="essentialism logo"/>
                </div>
                <div className="links">
                    <Link to="/about">About</Link>
                    {isLoggedIn ? <Link>Log In</Link> : 
                    <Link to="/register">Register</Link>}
                </div>
            </nav>
        </div>
    )
}

export default NavBar;