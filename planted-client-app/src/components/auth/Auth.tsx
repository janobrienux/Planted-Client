import { Component } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import logo from "../../assets/Planted.png";

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
      <div className="welcome">
        <img src={logo} id="logo" alt="Logo" />
        <SignUp updateToken={this.props.updateToken} />
        <br />
        <Login updateToken={this.props.updateToken} setToken={this.props.updateToken} />
      </div>
    );
  }
}
