import  { Component } from 'react';
// import styled from 'styled-components';

// const Form = styled.form`
//   width: 100%;
// `;

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
constructor(props: Props) {
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

handleSubmit = (e: React.SyntheticEvent) => {
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
  const bodyObj:  SignUpState ={
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
    this.props.updateToken(data.token)
    console.log('submit data', data)
    console.log('data.user', data.user)
  });
};




render() {
  return (
<div>
  <div>
    <h1>Hello, Friend!
      One step closer to channeling your green thumb
    </h1>
  </div>
        <h1>Create Account</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="first name"
            value={this.state.firstName}
            onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ firstName: e.currentTarget.value })}
          />
          <br />
          <input
            placeholder="last name"
            value={this.state.lastName}
            onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ lastName: e.currentTarget.value })}
          />
          <br />
          <input
            type="email"
            placeholder="email"
            value={this.state.email}
            onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ email: e.currentTarget.value })}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ password: e.currentTarget.value })}
          />
          <br />
           <input
            type="profileImg"
            placeholder="profileImg"
            value={this.state.profileImg}
            onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ profileImg: e.currentTarget.value })}
          />
          <br />
          <input
            placeholder="user/admin"
            value={this.state.userRole}
            onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ userRole: e.currentTarget.value })}
          />
          <br />
          <button>SIGN UP</button>
        </form>
      </div>
  )
}
}

