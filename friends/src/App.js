import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h3>Yay More Redux...</h3>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/protected">Protected</Link>
        </div>
        <Route path='/login' component={Login}/>
      </div>
    </Router>
  );
}

export default App;
