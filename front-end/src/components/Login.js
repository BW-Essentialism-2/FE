import React, { useState } from "react";
import { axiosWithAuth } from 'front-end/src/utils/axiosWithAuth.js';

const Login = (props) => {

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const handleChanges = e => {
    setUser({
        ...user,
        [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", user)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/protected');
      })
      .catch(err => {
        localStorage.removeItem("token");
        console.log("Invalid login: ", err);
      });
  };

  return (
    <div className="Login" >
      <form onSubmit={handleSubmit} >
        <input 
          type="text"
          name="username"
          value={user.username}
          onChange={handleChanges}
        />
        <input 
          type="password"
          name="password"
          value={user.password}
          onChange={handleChanges}
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;