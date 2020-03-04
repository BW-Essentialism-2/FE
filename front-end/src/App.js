import React, { useState,  } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {Route} from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import AllValues from './components/AllValues';
import PrivateRoute from './utils/PrivateRoute'

function App() {
  const [isToken, setIsToken] = useState(false)
  const toggleToken = bool => setIsToken(bool);
  return (
    <div className="App">
    
      <NavBar token={isToken} setToken={setIsToken}/>
      {/* ROUTING */}
      <Route exact path="/register" render={() => <Register setToken={toggleToken}/>} />
      <Route exact path="/login" render={() => <Login setToken={toggleToken}/>} />

      <PrivateRoute path = "/register/values" component={AllValues}/>
    </div>
  );
}

export default App;
