import React from 'react';

class UncontrolledLogin extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');
    console.log('Username:', username);
    console.log('Password:', password);
    // Perform login logic here
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default UncontrolledLogin;


