import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {History} from 'history'

import Home from './components/home/Home'
import Auth from './components/auth/Auth'
import PlantIndex from './components/plants/PlantsIndex'

//import UserPlants from './components/plants/PlantsDisplay';
type Props = {
  history: History
}


export default class App extends Component<Props> {
  state = {
    token: ""
  }
  componentDidMount = () => {
    if(localStorage.getItem('token')) {
      this.setState({
        token: localStorage.getItem('token')
      });
    }
  }

  updateToken = (newToken: string) => {
    localStorage.setItem('token', newToken); 
    this.setState({
        token: newToken    
      })
}

clearToken = ()=> {
  localStorage.clear();
  this.setState({
      token: ''
  })
}

  render() {
return (
  <div className='app'>

    <Switch>
              <Route exact path="/">
               <Auth updateToken={this.updateToken} history={this.props.history}/>
              </Route>
              <Route exact path="/PlantIndex">
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
              </Route>
          </Switch>
      {/* <Home clearToken={this.clearToken.bind(this)} updateToken={this.updateToken.bind(this)}
      token={this.state.token}  
      // plantCreate={this.props.plantCreate} fetchPlants={this.props.fetchPlants}
     /> */}
   
    {/* <Auth updateToken={this.updateToken.bind(this)}/> */}

  </div>
)
  }
}



