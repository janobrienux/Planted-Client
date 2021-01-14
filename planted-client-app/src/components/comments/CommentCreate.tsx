import { Component } from "react";
import Button from "@material-ui/core/Button";

import { Dialog, DialogContent, DialogActions } from "@material-ui/core";
import APIURL from "../../helpers/environment";

type Props = {
  token: string;
  id: number;
};

type State = {
  userName: string;
  date: string;
  entry: string;
  plantId: number;
  handleopen: boolean;
};

export default class CommentCreate extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userName: "",
      date: "",
      entry: "",
      plantId: this.props.id,
      handleopen: false,
    };
  }

  handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    //fetch and set value
    // const userName: string = this.state.userName;
    // const date: string = this.state.date;
    // const entry: string = this.state.entry;
    // const plantId: number = this.state.plantId;

    // console.log('this.state.firstName', firstName);
    const url: string = `${APIURL}/comments/create/${this.state.plantId}`;
    // const bodyObj: {
    //   userName,
    //   date,
    //   entry,
    //   plantId,
    // };
    // console.log(url);
    // console.log(bodyObj);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${this.props.token}`,
      },
      // body: JSON.stringify(bodyObj),
      body: JSON.stringify({
        userName: this.state.userName,
        date: this.state.date,
        entry: this.state.entry,
        plantId: this.state.plantId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("submit data", data);
        console.log("comment", data.comment);
      });
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

  render() {
    return (
      <div>
        <Button onClick={this.handleOpen} id="CreateButton" variant="outlined">
          Add a new comment
        </Button>
        <Dialog open={this.state.handleopen} onClose={this.handleClose}>
          <h1>Add a new comment</h1>
          <DialogContent id="register">
            <input
              placeholder="user name"
              value={this.state.userName}
              onChange={(e: any) => this.setState({ userName: e.currentTarget.value })}
            />
            <br />

            <br />
            <input
              placeholder="date"
              value={this.state.date}
              onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ date: e.currentTarget.value })}
            />
            <br />
            <input
              placeholder="entry"
              value={this.state.entry}
              onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ entry: e.currentTarget.value })}
            />
            <br />
          </DialogContent>
          <DialogActions id="Createbtn">
            <Button onClick={this.handleSubmit} id="btn">
              Add Comment
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
