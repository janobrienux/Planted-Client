import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "./components/home/Home";
import Auth from "./components/auth/Auth";
import AppBar from './components//home/AppBar'
import Navigation from './components/navigation/Navigation'
// import PlantIndex from './components/plants/PlantsIndex'
// import PlantCard from './components/plants/PlantCard'

//import UserPlants from './components/plants/PlantsDisplay';



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

  render() {
    return (
      <div className="app">
        <Router>

          
              <Home clearToken={this.clearToken.bind(this)} plantEdit={this.props}  token={this.state.token} updateToken={this.updateToken} /> 
        
        </Router>

        {/* <Home clearToken={this.clearToken.bind(this)} updateToken={this.updateToken.bind(this)}
      token={this.state.token}  
      // plantCreate={this.props.plantCreate} fetchPlants={this.props.fetchPlants}
     /> */}

        {/* <Auth updateToken={this.updateToken.bind(this)}/> */}
      </div>
    );
  }
}
