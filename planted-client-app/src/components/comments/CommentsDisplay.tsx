import { Component } from "react";

type Props = {
  token: string;
  id: number;
};

type State = {
  comment: [];
};

export default class CommentPost extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      comment: [],
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
        console.log("response", data);
        this.setState({
          comment: data,
        });
      });
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
      </div>
    );
  }
}
