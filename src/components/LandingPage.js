import React from 'react';
import Application from './Application';
import './LandingPage.css';

const LandingPage = ({ showApplication, onApplyClick }) => (
  <div className="LandingPage">
    <button
      className="applyButton"
      onClick={onApplyClick}
    >
        Apply Now!
    </button>
    { showApplication && <Application /> }
  </div>
);

export default LandingPage;
