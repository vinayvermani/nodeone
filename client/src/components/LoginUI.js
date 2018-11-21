import React from "react";
const ShowError = props => {
  if (props.if) {
    return (
      <div
        className="alert alert-danger"
        style={{ fontSize: ".75em", padding: ".15em .5em"}}
        role="alert"
      >
        {props.message}
      </div>
    );
  } else {
    return "";
  }
};

export default class LoginUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validUser: true,
      validPassword: true,
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePwdChange = this.handlePwdChange.bind(this);
  }
  handleSubmit(event) {
    if (!this.state.username) {
        this.setState({validUser: false})
        event.preventDefault();
    }
    if (!this.state.password){
        this.setState({validPassword: false})
        event.preventDefault();
    }

  }
  handleUserChange(event) {
    this.setState({ username: event.target.value, validUser: true });
  }
  handlePwdChange(event) {
    this.setState({ password: event.target.value, validPassword: true });
  }
  render() {
    return (
      <div>
        <form action="/login" method="POST" onSubmit={this.handleSubmit}>
          <div
            style={{ width: "400px", padding: "40px" }}
            className="bg-light rounded m-auto"
          >
            <h2
              className="display-4 mb-4 text-center"
              style={{ fontSize: "1.7em" }}
            >
              Login
            </h2>
            <div className="input-group">
              <input
                type="text"
                name="username"
                className="form-control mb-2"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon"
                value={this.state.username}
                onChange={this.handleUserChange}
              />
            </div>
            <ShowError
              if={!this.state.validUser}
              message="Username is required"
            />
            <div className="input-group">
              <input
                name="password"
                type="password"
                className="form-control mb-2"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                value={this.state.password}
                onChange={this.handlePwdChange}
              />
            </div>
            <ShowError
              if={!this.state.validPassword}
              message="Password is required"
            />
            <input type="submit" value="login" />
          </div>
        </form>
      </div>
    );
  }
}
