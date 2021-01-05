import  { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       '& .MuiTextField-root': {
//         margin: theme.spacing(1),
//         width: '25ch',
//       },
//     },
//   }),
// );

// const signUpForm = styled.form` {

// }`

type SignUpState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profileImg: string;
  userRole: string;
};

interface Props  {
  updateToken: (token: string) => void
}
export default class SignUp extends Component<Props, SignUpState> {
constructor(props: any) {
  super(props)
  this.state = {
    firstName:'',
    lastName: '',
    email:'',
    password:'',
    profileImg:'',
    userRole: '',
  }
}

handleSubmit = (e: any) => {
  e.preventDefault();
  //fetch and set value
  const firstName: string = this.state.firstName;
  const lastName: string = this.state.lastName;
  const email: string = this.state.email;
  const password: string = this.state.password;
  const profileImg: string = this.state.profileImg
  const userRole: string = this.state.userRole;

  // console.log('this.state.firstName', firstName);
  const url: string = 'http://localhost:4000/user/register';
  const bodyObj: any = {
    firstName,
    lastName,
    email,
    password,
    profileImg,
    userRole,
  };
  // console.log(url);
  // console.log(bodyObj);

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
  });
};




render() {
  return (
<div>
        <h1>Signup</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="first name"
            value={this.state.firstName}
            onChange={(e: any) => this.setState({ firstName: e.target.value })}
          />
          <br />
          <input
            placeholder="last name"
            value={this.state.lastName}
            onChange={(e: any) => this.setState({ lastName: e.target.value })}
          />
          <br />
          <input
            type="email"
            placeholder="email"
            value={this.state.email}
            onChange={(e: any) => this.setState({ email: e.target.value })}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={(e: any) => this.setState({ password: e.target.value })}
          />
          <br />
           <input
            type="profileImg"
            placeholder="profileImg"
            value={this.state.profileImg}
            onChange={(e: any) => this.setState({ profileImg: e.target.value })}
          />
          <br />
          <input
            placeholder="user/admin"
            value={this.state.userRole}
            onChange={(e: any) => this.setState({ userRole: e.target.value })}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
  )
}
}

