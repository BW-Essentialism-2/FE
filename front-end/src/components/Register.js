import React, { useState } from 'react'
import {useRequest} from '../utils/useRequest'

import { useHistory } from 'react-router-dom'

const Register = ({setToken}) => {
    const history = useHistory()
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
                setToken(true)
                localStorage.setItem('user_id', res.data.user.id)
                history.push('/register/values')
            })
            .catch(err => console.log(err))

    }
    return (
        <div>
            <form onSubmit={e => HandleSubmit(e)}>
                {console.log(setToken)}
                <input name="username" placeholder="Username" value={credentials.username} onChange={e => handleChanges(e)}/>
                <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={e => handleChanges(e)}/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register