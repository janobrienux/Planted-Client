import React, {Component} from 'react';
import './App.css';
import Auth from './components/auth/Auth';
import PlantsCreate from './components/plants/PlantsCreate';

type AppState = {
  token: string,
}
interface Props {
  token: string | null
}
export default class App extends Component<{}, Props, AppState> {
  constructor(props:AppState) {
    super(props);
    this.state = {
      token: localStorage.getItem('token') ? localStorage.getItem('token'): ''
    }
    console.log(this.state.token)
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
    <Auth updateToken={this.updateToken.bind(this)}/>
    <PlantsCreate token={this.state.token}/>
  </div>
)
  }
}



