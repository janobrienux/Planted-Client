import { Component } from 'react';
import SignUp  from './SignUp';


type AuthProps ={
  updateToken: (newToken: string) => void;
}

type UserState = {
  showLogin: boolean;
}
export default class Auth extends Component<AuthProps, UserState> {
 
loginToggle = (e: any) => {
  e.preventDefault();
  if(this.state.showLogin === false) {
    return this.setState({
      showLogin: true,
    })
  }
  if (this.state.showLogin === true) {
    return this.setState({
      showLogin: false,
    });
  }
}
render() {
  return(
    <div>
      <SignUp updateToken={this.props.updateToken} />
    </div>
  )
}
}  
