import { Component } from "react";

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

  render() {
    return (
      <div>
        {this.state.comments.map((comment: any, index: any) => {
          return (
            <div>
              <ul>
                <li>{comment.userName}</li>
                <li>{comment.date}</li>
                <li>{comment.entry}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}
