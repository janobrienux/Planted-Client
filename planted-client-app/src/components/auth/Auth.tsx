import { Component } from 'react';
import SignUp  from './SignUp';
import Login from './Login';
import {History} from 'history'


type AuthProps ={
  updateToken: (newToken: string) => void;
  history:History
}

type AuthState = {
}
export default class Auth extends Component<AuthProps, AuthState> {
 
constructor(props: AuthProps) {
  super(props);
  this.state = {
    holder: 'placeholder'
  };
}
render() {
  return(
    <div>
      <SignUp updateToken={this.props.updateToken} history={this.props.history} />
      <br/>
      <Login setToken={this.props.updateToken} history={this.props.history} />
    </div>
  )
} 
} 
