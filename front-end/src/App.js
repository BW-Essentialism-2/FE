
import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import AllValues from './components/AllValues';
import Top3Form from './components/Top3Form';
import Dashboard from './components/dashboard/DashboardEdit';
import DashboardEdit from './components/dashboard/DashboardEdit';
import PrivateRoute from './utils/PrivateRoute';
import CurrentGoals from './components/CurrentGoals'

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
      <PrivateRoute path = "/register/top3" component={Top3Form}/>
      <PrivateRoute path="/register/goals" component={CurrentGoals}/>
      <PrivateRoute path = "/protected" component={Dashboard}/>
      <PrivateRoute path = "/protected/edit" component={DashboardEdit}/>

    </div>
  );
}

export default App;