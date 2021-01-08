import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import SignUp from '../auth/SignUp'
// import Login from '../auth/Login'
import Auth from "../auth/Auth";
// import PlantsCreate from '../plants/PlantsCreate'
// import PlantDisplay from '../plants/PlantsDisplay'
import PlantIndex from "../plants/PlantsIndex";
import {History} from 'history'

interface Props {
  updateToken: (newToken: string) => void;
  clearToken: () => void;
  token: string | null;
  history:History
  // fetchPlants:()=> void,
  //  plantCreate: any,
}

export default class Home extends React.Component<Props> {
  render() {
    return (
      <div className="homeDiv">
        <div>
            <div className="container">
          <Switch>
              <Route exact path="/Auth">
                <Auth updateToken={this.props.updateToken} history={this.props.history} />
              </Route>
              <Route exact path="/PlantIndex">
                {this.props.token !== null ? (
                  <PlantIndex
                    // plantCreate={this.props.plantCreate}
                    updateToken={this.props.updateToken}
                    clearToken={this.props.clearToken}
                    // fetchPlants={this.props.fetchPlants}
                    token={this.props.token}
                  />
                ) : (
                  <Redirect to="/Auth" />
                )}
              </Route>
          </Switch>
            </div>
        </div>
        {/* <Switch>
            <Route exact path='/SignUp' render={() => (<SignUp updateToken={this.props.updateToken} />)}/>    
          </Switch> */}
      </div>
    );
  }
}
