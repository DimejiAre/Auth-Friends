import React from 'react';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';
import Friends from './components/Friends';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {

  const login = (formValue, actions) => {
    debugger
  }

  return (
    <Router>
      <div className="App">
        <Route 
        path='/'
        render={props => {
          return <NavBar {...props}/>
        }}/>

        <Route 
        exact path='/'
        render={props => {
          return <LoginForm {...props} login={login}/>
        }}/>

        <Route 
        path='/friends'
        render={props => {
          return <Friends {...props}/>
        }}/>
        
      </div>
    </Router>
  );
}

export default App;
