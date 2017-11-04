import React from 'react';

const BgCheckRequest = ({ confirmApplication, cancelApplication }) => (
  <div>
    Instacart is required to perform a background check. Do you wish to proceed and trigger a background check?
    <button onClick={confirmApplication}>Yes</button>
    <button onClick={cancelApplication}>No</button>
  </div>
);

export default BgCheckRequest;
