import React, {Component} from 'react';
import './App.css';
import Auth from './components/auth/Auth';
import PlantsCreate from './components/plants/PlantsCreate';

type AppState = {
  token: string,
}
// interface Props {
//   token: string
// }
export default class App extends Component<{}, AppState> {
  constructor(props:AppState) {
    super(props);
    this.state = {
      token: ''
    }
  }
  updateToken () {
    localStorage.getItem('token') 
    this.setState({
        token: ''
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
    <Auth updateToken={this.updateToken.bind(this)}/>
    <PlantsCreate token={this.updateToken}/>
  </div>
)
  }
}



