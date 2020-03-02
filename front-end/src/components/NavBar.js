import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="nav">
            <nav>
                <div className="leftCont">
                    <img src={require("../logo.png")} alt="essentialism logo"/>
                </div>
                <div className="links">
                    <Link>About</Link>
                    <Link>Log In</Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;