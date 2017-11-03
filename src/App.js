import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import BgCheckRequest from './components/BgCheckRequest';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/background-check" component={BgCheckRequest} />
    </div>
  </Router>
);

export default App;
