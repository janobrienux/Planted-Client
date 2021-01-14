import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AppBar from "./AppBar";
import PlantsIndex from "../plants/PlantsIndex";
import Dashboard from "../dashboard/Dashboard";

import "./Auth.css";

interface Props {
  updateToken: (newToken: string) => void;
  clearToken: () => void;
  token: string;
  plantEdit: any;
}

export default class Home extends React.Component<Props> {
  render() {
    return (
      <Router>
        <div className="homeDiv">
          <div>
            <div className="container">
              <AppBar
                clickLogout={this.props.clearToken}
                updateToken={this.props.updateToken}
                token={this.props.token}
              />
              <PlantsIndex
                plantEdit={this.props.plantEdit}
                updateToken={this.props.updateToken}
                token={this.props.token}
              />
              <Dashboard token={this.props.token} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
