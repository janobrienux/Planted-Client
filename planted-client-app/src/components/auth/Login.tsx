import {Component} from 'react';


interface LoginProps  {
    setToken: (token: string) => void;
  }  
  type LoginState = {
    email: string;
    password: string;
  };


  
  export default class Login extends Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
      super(props);
      this.state = {
        email: '',
        password: ''
      };
  
      this.handleSubmit = this.handleSubmit.bind(this);
  
    }
  
    handleSubmit = (e: React.SyntheticEvent) => {
      e.preventDefault();
      console.log( this.state.email);
  
      const email: string = this.state.email;
      const password: string = this.state.password;
  
      const url: string = 'http://localhost:4000/user/login' ;
      const bodyObj: object = {
        email,
        password
      }
  
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyObj),
      })
      .then(res => res.json())
      .then(data => {
        console.log('submit data', data)
        console.log('data.user', data.user)
        this.props.setToken(data.sessionToken)
      })
    };
  
    render() {
      return (
        <div>
          <h2>Welcome back!</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              placeholder="email"
              value={this.state.email}
              onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ email: e.currentTarget.value })}
            />
            <input
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ password: e.currentTarget.value })}
            />
            <button>Login</button>
          </form>
        </div>
      );
    }
  }