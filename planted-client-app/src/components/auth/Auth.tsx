import { Component } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import logo from "../../assets/Planted.png";
import "./Register.css";
import pothos from "../../assets/pothos.jpeg";
import snakePlant from "../../assets/snakePlant.jpeg";
import haworthia from "../../assets/HAWORTHIA.jpeg";
import monstera from "../../assets/monstera.webp";

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
        <h1>Welcome to Planted.</h1>
        <img src={logo} id="logo" alt="Logo" />
        <h3>
          Here at Planted you'll find taking care of your plants easier! We help provide a way to track the plants you
          have by adding them into to your profile, managing and updating their care, as well as a community to connect
          with other plant enthusiasts. Here we want to help you, see your plants THRIVE!
        </h3>
        <h4>Ready to get Planted</h4>
        <SignUp updateToken={this.props.updateToken} />
        <h1>Discover</h1>
        <h3>
          These plants are the best to start your collection. Easy to grow and can generally withstand erractic
          watering, bad lighting and fluctuating temperature. Find your inner green thumb with these, and discover the
          endless possibilities.
        </h3>
        <div className="discover">
          <h2>Pothos Plant</h2>
          <img src={pothos} alt="pothos plant" width="160px" />
          <h2>Snake Plant</h2>
          <img src={snakePlant} alt="snake plant" width="160px" />
          <h2>Monstera</h2>
          <img src={monstera} alt="monstera plant" width="160px" />
          <h2>Haworthia</h2>
          <img src={haworthia} alt="haworthia plant" width="160px" height="200px" />
        </div>

        <Login updateToken={this.props.updateToken} setToken={this.props.updateToken} />
      </div>
    );
  }
}
