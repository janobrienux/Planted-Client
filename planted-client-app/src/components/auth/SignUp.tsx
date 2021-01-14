import { Component } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import APIURL from "../../helpers/environment";

type SignUpState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profileImg: string;
  userRole: string;
  handleopen: boolean;
};

interface Props {
  updateToken: (token: string) => void;
}
export default class SignUp extends Component<Props, SignUpState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      profileImg: "",
      userRole: "",
      handleopen: false,
    };
  }

  handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    //fetch and set value
    const firstName: string = this.state.firstName;
    const lastName: string = this.state.lastName;
    const email: string = this.state.email;
    const password: string = this.state.password;
    const profileImg: string = this.state.profileImg;
    const userRole: string = this.state.userRole;

    // console.log('this.state.firstName', firstName);
    const url: string = `${APIURL}/user/register`;
    const bodyObj: SignUpState = {
      firstName,
      lastName,
      email,
      password,
      profileImg,
      userRole,
      handleopen: true,
    };
    // console.log(url);
    // console.log(bodyObj);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyObj),
    })
      .then((res) => res.json())
      .then((data) => {
        this.handleClose();
        this.props.updateToken(data.token);
        console.log("submit data", data);
        console.log("data.user", data.user);
      });
    alert("User Registration Successful!");
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

  setFirstName(event: string) {
    this.setState({
      firstName: event,
    });
  }
  setLastName(event: string) {
    this.setState({
      lastName: event,
    });
  }
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
  setUserRole(event: string) {
    this.setState({
      userRole: event,
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleOpen} id="RegisterButton" variant="outlined">
          SIGN UP
        </Button>
        <Dialog open={this.state.handleopen} onClose={this.handleClose}>
          <h2> Hello, Friend! One step closer to channeling your green thumb</h2>

          <DialogContent id="RegisterIn">
            <TextField
              autoFocus
              margin="dense"
              label="First name"
              type="text"
              fullWidth
              onChange={(e) => this.setFirstName(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Last name"
              type="text"
              fullWidth
              onChange={(e) => this.setLastName(e.target.value)}
            />
            <TextField
              id="text"
              autoFocus
              margin="dense"
              label="Email"
              type="text"
              fullWidth
              onChange={(e) => this.setEmail(e.target.value)}
            />
            <TextField
              id="text"
              autoFocus
              margin="dense"
              label="Password"
              type="password"
              fullWidth
              onChange={(e) => this.setPassword(e.target.value)}
            />
            <TextField
              id="text"
              autoFocus
              margin="dense"
              label="User/Admin"
              type="text"
              fullWidth
              onChange={(e) => this.setUserRole(e.target.value)}
            />
          </DialogContent>
          <DialogActions id="Registerbtn">
            <Button onClick={this.handleSubmit} id="btn">
              Sign Up
            </Button>
          </DialogActions>
        </Dialog>
        {/* <form onSubmit={this.handleSubmit}>
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
        </form> */}
      </div>
    );
  }
}
