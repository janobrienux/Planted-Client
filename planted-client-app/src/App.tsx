import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "./components/home/Home";
import Auth from "./components/auth/Auth";
// import PlantIndex from './components/plants/PlantsIndex'
// import PlantCard from './components/plants/PlantCard'

//import UserPlants from './components/plants/PlantsDisplay';

type Props = {
};

export default class App extends Component<Props> {
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
          <Switch>
            <Route exact path="/">
              <Auth updateToken={this.updateToken} />
            </Route>
            <Link to="/PlantsIndex">
              <Home token={this.state.token} updateToken={this.updateToken} />
            </Link>
            {/* <Route exact path="/PlantIndex">
                {this.state.token !== null ? (
                  <PlantIndex
                    // plantCreate={this.props.plantCreate}
                    updateToken={this.updateToken}
                    clearToken={this.clearToken}
                    // fetchPlants={this.props.fetchPlants}
                    token={this.state.token}
                  />
                ) : (
                  <Redirect to="/" />
                )}
              </Route> */}
          </Switch>
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
