import { Component } from "react";

import { Card } from "@material-ui/core/";
import CommentCreate from "../comments/CommentCreate";
import CommentDisplay from "../comments/CommentsDisplay";
import { Row } from "antd";
import "./Dashboard.css";
import APIURL from "../../helpers/environment";
interface Props {
  token: string;
}

type State = {
  allPlants: [];
};

export default class AllPlants extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      allPlants: [],
    };
  }

  fetchAllPlants = () => {
    fetch(`${APIURL}/plants/plants`, {
      method: "GET",
      headers: new Headers({
        "Content-type": "application/json",
        // Authorization: `${localStorage.getItem("token")}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("response !", data);
        this.setState({
          allPlants: data.plants,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.fetchAllPlants();
    // this.fetchComments();
  }

  render() {
    return (
      <div className="row">
        <h1>Community Plants</h1>
        {this.state.allPlants.map((plant: any, index: any) => (
          <Row className="row">
            <div className="column">
              <Card className="plantCard" key={plant.id}>
                <li className="plantName">{plant.plantName}</li>

                <li>
                  <img className="cardImg" src={plant.plantImg} alt="plant" />
                </li>
                <li>Temperature: {plant.temperature}</li>
                <li>Water Frequency: {plant.waterFrequency}</li>
                <li>Last Watering: {plant.lastWatering}</li>
                <li>{plant.isThriving}</li>
                <CommentCreate id={plant.id} token={this.props.token} />
                <CommentDisplay id={plant.id} token={this.props.token} />
              </Card>
            </div>
          </Row>
        ))}
      </div>
    );
  }
}
