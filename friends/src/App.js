import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';
import Friends from './components/Friends';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {

  const [friends, setFriends] = useState([]);

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
            return <Friends {...props} friends={friends} setFriends={setFriends} />
          }} />

      </div>
    </Router>
  );
}

export default App;
