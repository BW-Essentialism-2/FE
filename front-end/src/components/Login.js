import React, { useState, useReducer } from "react";

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
        console.log("invalid login: ", err);
      });
  };

  return (
    <div className="Login" >
      <form onSubmit={handleSubmit} >
        <input 
          type="text"
          name="username"
          value={username}
          onChange={handleChanges}
        />
        <input 
          type="password"
          name="password"
          value={password}
          onChange={handleChanges}
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;