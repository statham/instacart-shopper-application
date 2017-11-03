import React from 'react';

const Application = () => (
  <form>
    <label>
      Name:
      <input type="text" name="name" />
    </label>
    <label>
      Email:
      <input type="text" name="email" />
    </label>
    <label>
      Phone Number:
      <input type="text" name="phone number" />
    </label>
    <label>
      Zip Code:
      <input type="text" name="zip code" />
    </label>
    <input type="submit" value="Submit" />
  </form>
);

export default Application;
