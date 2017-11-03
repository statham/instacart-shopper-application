import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import LandingPageContainer from './containers/LandingPageContainer';
import BgCheckRequest from './components/BgCheckRequest';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={LandingPageContainer} />
      <Route path="/background-check" component={BgCheckRequest} />
    </div>
  </Router>
);

export default App;
