import { Component } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import logo from "../../assets/Planted.png";
import "./Register.css";

type AuthProps = {
  updateToken: (newToken: string) => void;
};
//
type AuthState = {};
export default class Auth extends Component<AuthProps, AuthState> {
  constructor(props: AuthProps) {
    super(props);
    this.state = {
      holder: "placeholder",
    };
  }
  render() {
    return (
      <div id="welcome">
        <img src={logo} id="logo" alt="Logo" />

        <SignUp updateToken={this.props.updateToken} />
        <Login updateToken={this.props.updateToken} setToken={this.props.updateToken} />
      </div>
    );
  }
}
