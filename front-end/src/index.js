import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';
import './style.css';

import Login from './Login';
import Logout from './Logout';
import App from './App';

import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './utils/Common';

function App1() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="content">
            <img  src={ require('./Img/logo.png') } />
            <div>
            <NavLink activeClassName="active" to="/Register">Register</NavLink>
            
            <NavLink activeClassName="active" to="/Logout">Logout</NavLink>
            
          </div>
          
          <div>
            
            <Switch>
              
              <Route exact path="/" component={App1} />
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/Logout" component={Logout} />
            </Switch>
            
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

render(<App1 />, document.getElementById('root'));
