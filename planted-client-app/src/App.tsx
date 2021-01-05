import React, {Component} from 'react';
import './App.css';
import Auth from './components/auth/Auth';


type AppState = {
  token: string,

}

export default class App extends Component<{}, AppState> {
  constructor(props:any) {
    super(props);
    this.state = {
      token: ''
    }
  }
  updateToken = (newToken: string)=> {
    localStorage.setItem('token', newToken)
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
    <Auth updateToken={this.updateToken.bind(this)}/>
  </div>
)
  }
}



