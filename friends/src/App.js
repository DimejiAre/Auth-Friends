import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';
import Friends from './components/Friends';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import './App.css';

function App() {

  const [friends, setFriends] = useState([]);

  // const withAuthCheck = (Component, props) => {
  //   if(localStorage.getItem('token')){
  //     return <Component {...props}/>
  //   }
  //   return <Redirect to='/' />
  // }

  return (
    <Router>
      <div className="App">
        <Route
          path='/'
          render={props => {
            return <NavBar {...props} />
          }} />

        <Route
          exact path='/'
          render={props => {
            return <LoginForm {...props} />
          }} />

        <Route
          path='/friends'
          render={props => {
            if(localStorage.getItem('token')){
              return <Friends {...props} friends={friends} setFriends={setFriends} />
            }
            return <Redirect to='/' />
          }} />

      </div>
    </Router>
  );
}

export default App;
