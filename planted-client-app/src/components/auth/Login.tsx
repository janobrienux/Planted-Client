import { Component } from "react";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import APIURL from "../../helpers/environment";
interface LoginProps {
  setToken: (token: string) => void;
  updateToken: (newToken: string) => void;
}
type LoginState = {
  email: string;
  password: string;
  handleopen: boolean;
  incorrectPassword: boolean;
  incorrectEmail: boolean;
};

export default class Login extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
      handleopen: false,
      incorrectPassword: false,
      incorrectEmail: false,
    };
  }

  handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(this.state.email);

    const bodyObj: object = {
      email: this.state.email,
      password: this.state.password,
    };

    fetch(`${APIURL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("submit data", data);
        console.log("data.user", data.user);
        this.props.setToken(data.token);
      });
    // alert("Login Successful!");
  };

  handleOpen = () => {
    this.setState({
      handleopen: true,
    });
  };

  handleClose = () => {
    this.setState({
      handleopen: false,
    });
  };

  setEmail(event: string) {
    this.setState({
      email: event,
    });
  }

  setPassword(event: string) {
    this.setState({
      password: event,
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome back!</h2>
        <Button onClick={this.handleOpen} id="LoginButton" variant="outlined">
          LOGIN
        </Button>
        <Dialog open={this.state.handleopen} onClose={this.handleClose}>
          <DialogTitle id="dialogTitle">Please Login</DialogTitle>
          <DialogContent id="Login">
            <TextField
              autoFocus
              margin="dense"
              label="Email"
              type="text"
              fullWidth
              onChange={(e) => this.setEmail(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Password"
              type="password"
              fullWidth
              onChange={(e) => this.setPassword(e.target.value)}
            />
          </DialogContent>
          <DialogActions id="Loginbtn">
            <Button onClick={this.handleSubmit}>LOGIN</Button>
            {/* <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
        <Alert
          action={
            <Button color="inherit" size="small">
            </Button>
          }
        >
    
        </Alert> */}
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

// <form onSubmit={this.handleSubmit}>
//           <input
//             type="email"
//             placeholder="email"
//             value={this.state.email}
//             onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ email: e.currentTarget.value })}
//           />
//           <input
//             type="password"
//             placeholder="password"
//             value={this.state.password}
//             onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ password: e.currentTarget.value })}
//           />
//           <button>Login</button>
//         </form>
