import React, { Component } from "react";
 import { BrowserRouter as Router, Route, Switch, Redirect, Link} from "react-router-dom";
// import SignUp from '../auth/SignUp'
// import Login from '../auth/Login'
import Auth from "../auth/Auth";
// import PlantsCreate from '../plants/PlantsCreate'
// import PlantDisplay from '../plants/PlantsDisplay'
import PlantsIndex from "../plants/PlantsIndex";
// import PlantCard from '../plants/PlantCard'
// import {History} from 'history'

interface Props {
  updateToken: (newToken: string) => void;
  // clearToken: () => void;
  token: string;
  // history:History
  // fetchPlants:()=> void,
  //  plantCreate: any,
}

export default class Home extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <Router>
      <div className="homeDiv">
        <div>
            <div className="container">
                {/* <Auth updateToken={this.props.updateToken} /> */}
                <Link to="/PlantsIndex">Plants<PlantsIndex updateToken={this.props.updateToken} token={this.props.token} />
                </Link>
              <Route>
                {/* <PlantCard token={this.props.token}  /> */}
                </Route>
      
            </div>
        </div>
        {/* <Switch>
            <Route exact path='/SignUp' render={() => (<SignUp updateToken={this.props.updateToken} />)}/>    
          </Switch> */}
      </div>
        </Router>
      </React.Fragment>
    );
  }
}
