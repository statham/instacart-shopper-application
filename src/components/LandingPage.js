import React from 'react';
import Application from './Application';
import './LandingPage.css';

const LandingPage = ({ showApplication, onApplyClick, onApplicationSubmit }) => (
  <div className="LandingPage">
    { !showApplication &&
      <button
        className="applyButton"
        onClick={onApplyClick}
      >
          Apply Now!
      </button>
    }
    { showApplication && <Application onApplicationSubmit={onApplicationSubmit}/> }
  </div>
);

export default LandingPage;
