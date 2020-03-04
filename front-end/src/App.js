import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {Route} from 'react-router-dom'
import Register from './components/Register';
import AllValues from './components/AllValues';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    if(localStorage.getItem("token")) {
      setIsLoggedIn(true)
    }
  }, [isLoggedIn])
  return (
    <div className="App">
      
      {/* Commented navbar out till styling is finished */}
        <NavBar isLoggedIn={isLoggedIn}/>
      {/* ROUTING */}
      <Route exact path="/register" component={Register} />
      <Route path = "/register/values" component={AllValues}/>
    </div>
  );
}

export default App;
