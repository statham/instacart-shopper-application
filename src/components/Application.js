import React, { Component } from 'react';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      zip: "",
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  submitHandler(e) {
    const { onApplicationSubmit } = this.props;
    e.preventDefault();
    onApplicationSubmit(this.state);
    window.location.pathname = "/background-check";
  }

  changeHandler(field, e) {
    switch(field) {
      case 'name':
        this.setState({ name: e.target.value });
        break;
      case 'email':
        this.setState({ email: e.target.value });
        break;
      case 'phone':
        this.setState({ phone: e.target.value });
        break;
      case 'zip':
        this.setState({ zip: e.target.value });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(e) => this.changeHandler('name', e)}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={(e) => this.changeHandler('email', e)}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={(e) => this.changeHandler('phone', e)}
            />
          </label>
          <label>
            Zip Code:
            <input
              type="text"
              name="zip"
              value={this.state.zip}
              onChange={(e) => this.changeHandler('zip', e)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Application;
