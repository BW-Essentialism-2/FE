import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({token, setToken}) => {
    const [isUser, setIsUser] = useState(false)

    const logOut = () => {
        localStorage.removeItem('token')
        setToken(false)
    }
    
    useEffect(() => {
        if(token !== false) {
            setIsUser(true)
        } else {
            setIsUser(false)
        }
    }, [token])
    return (
        <div className="nav">
            <nav>
                {console.log(token)}
                <div className="leftCont">
                    <img src={require("../logo.png")} alt="essentialism logo"/>
                </div>
                <div className="links">
                    <Link to="/about">ABOUT</Link>
                    <Link to="/register">REGISTER</Link>
                    {isUser === false ? <Link to="/login">LOG IN</Link> : <Link onClick={e => logOut()}>Log Out</Link> }
                </div>
            </nav>
        </div>
    )
}

export default NavBar;