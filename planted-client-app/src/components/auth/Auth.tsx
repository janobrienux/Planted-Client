import { Component } from 'react';
import SignUp  from './SignUp';
import Login from './Login';


type AuthProps ={
  updateToken: (newToken: string) => void;
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
      <SignUp updateToken={this.props.updateToken} />
      <br/>
      <Login setToken={this.props.updateToken}/>
    </div>
  )
} 
} 
