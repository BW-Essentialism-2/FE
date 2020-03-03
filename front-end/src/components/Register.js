import React, { useState } from 'react'
import {useRequest} from '../utils/useRequest'

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })
    const handleChanges = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const HandleSubmit = e => {
        e.preventDefault()
        useRequest('/api/auth/register', 'post', false, credentials)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user_id', res.data.user.id)
            })
            .catch(err => console.log(err))

    }
    return (
        <div>
            <form onSubmit={e => HandleSubmit(e)}>
                <input name="username" placeholder="Username" value={credentials.username} onChange={e => handleChanges(e)}/>
                <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={e => handleChanges(e)}/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register