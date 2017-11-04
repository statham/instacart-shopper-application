import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import LandingPageContainer from './containers/LandingPageContainer';
import BgCheckRequestContainer from './containers/BgCheckRequestContainer';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={LandingPageContainer} />
      <Route path="/background-check" component={BgCheckRequestContainer} />
    </div>
  </Router>
);

export default App;
