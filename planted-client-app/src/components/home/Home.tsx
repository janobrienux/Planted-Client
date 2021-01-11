import React, { Component } from "react";
 import { BrowserRouter as Router, Route, Switch, Redirect, Link} from "react-router-dom";
// import SignUp from '../auth/SignUp'
// import Login from '../auth/Login'
import Auth from "../auth/Auth";
import AppBar from './AppBar'
// import PlantsCreate from '../plants/PlantsCreate'
// import PlantDisplay from '../plants/PlantsDisplay'
import PlantsIndex from "../plants/PlantsIndex";
// import PlantCard from '../plants/PlantCard'
// import {History} from 'history'

interface Props {
  updateToken: (newToken: string) => void;
  clearToken: () => void;
  token: string;
  plantEdit:any;
  // plantId: number;
  // history:History
  // fetchPlants:()=> void,
  //  plantCreate: any,
}

export default class Home extends React.Component<Props> {
  render() {
    return (
        <Router>
      <div className="homeDiv">
        <div>
            <div className="container">
                <AppBar clickLogout={this.props.clearToken} updateToken={this.props.updateToken} token={this.props.token} />
               <PlantsIndex plantEdit={this.props.plantEdit} updateToken={this.props.updateToken} token={this.props.token} />
              
            </div>
        </div>
      </div>
        </Router>
    );
  }
}
