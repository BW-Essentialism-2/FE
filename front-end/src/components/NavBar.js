import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <img src={require("../logo.png")} alt="essentialism logo"/>
            <div>
                <Link>About</Link>
                <Link>Log In</Link>
            </div>
        </div>
    )
}

export default NavBar;