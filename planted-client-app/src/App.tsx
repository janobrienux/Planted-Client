import React, { Component } from "react";
// import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./components/home/Home";
import Auth from "./components/auth/Auth";

export default class App extends Component {
  state = {
    token: "",
  };
  componentDidMount = () => {
    if (localStorage.getItem("token")) {
      this.setState({
        token: localStorage.getItem("token"),
      });
    }
  };

  updateToken = (newToken: string) => {
    localStorage.setItem("token", newToken);
    this.setState({
      token: newToken,
    });
  };

  clearToken = () => {
    localStorage.clear();
    this.setState({
      token: "",
    });
  };

  protectedViews = () => {
    return !this.state.token ? (
      <div>
        <Router>
          <Auth updateToken={this.updateToken.bind(this)} />
        </Router>
      </div>
    ) : (
      <>
        <Home
          clearToken={this.clearToken.bind(this)}
          plantEdit={this.props}
          token={this.state.token}
          updateToken={this.updateToken}
        />
      </>
    );
  };

  render() {
    return <div className="app">{this.protectedViews()}</div>;
  }
}
