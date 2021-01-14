import { Component } from "react";
// import Card from "@material-ui/core";

import "./Comments.css";

type Props = {
  token: string;
  id: number;
};

type State = {
  comments: [];
};

export default class CommentPost extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  fetchComments = () => {
    fetch(`http://localhost:4000/comments/comments/${this.props.id}`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          comments: data.comments,
        });
      });
  };

  componentDidMount() {
    this.fetchComments();
  }

  commentDelete = (comment: any) => {
    fetch(`http://localhost:4000/comments/${comment.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    }).then(() => this.fetchComments());
  };

  render() {
    return (
      <div>
        {this.state.comments.map((comment: any, index: any) => {
          return (
            <div id="commentStyl">
              <ul>
                <li>{comment.userName}</li>
                <li>{comment.date}</li>
                <li>{comment.entry}</li>
                <button
                  className="cardbtn"
                  onClick={() => {
                    this.commentDelete(comment);
                  }}
                >
                  Delete
                </button>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}
