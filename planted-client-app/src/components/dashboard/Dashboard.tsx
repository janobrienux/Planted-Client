import { Component } from "react";

import { Card } from "@material-ui/core/";
import CommentCreate from "../comments/CommentCreate";
import CommentDisplay from "../comments/CommentsDisplay";
import "./Dashboard.css";
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
    fetch("http://localhost:4000/plants/plants", {
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
  }

  render() {
    return (
      <div>
        <h1>TEST</h1>
        {this.state.allPlants.map((plant: any, index: any) => (
          <div>
            <Card className="plantCard" key={plant.id}>
              <li className="plantName">{plant.plantName}</li>

              <li>
                <img className="cardImg" src={plant.plantImg} alt="plant" />
              </li>
              <li>Temperature: {plant.temperature}</li>
              <li>Water Frequency: {plant.waterFrequency}</li>
              <li>Last Watering: {plant.lastWatering}</li>
              <li>{plant.isThriving}</li>
            </Card>

            <CommentCreate id={plant.id} token={this.props.token} />
            <CommentDisplay id={plant.id} token={this.props.token} />
          </div>
        ))}
      </div>
    );
  }
}
