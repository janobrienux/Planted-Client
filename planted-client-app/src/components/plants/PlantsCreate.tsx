import { Component, MouseEvent } from "react";
import Button from "@material-ui/core/Button";
import "./plantCreate.css";

import { Dialog, DialogContent, DialogActions } from "@material-ui/core";

import APIURL from "../../helpers/environment";

type PlantState = {
  plantName: string;
  plantImg: string;
  temperature: string;
  waterFrequency: string;
  lastWatering: string;
  isThriving: boolean;
  handleopen: boolean;
};

interface Props {
  // plantCreate: any,
  token: string | null;
  fetchPlants: () => void;
}

export default class PlantCreate extends Component<Props, PlantState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      plantName: "",
      plantImg: "",
      temperature: "",
      waterFrequency: "",
      lastWatering: "",
      isThriving: true,
      handleopen: false,
    };
  }

  handleSubmit = (e: React.SyntheticEvent) => {
    // console.log('oh hi mark')
    e.preventDefault();
    //fetch and set value
    const plantData = new FormData();
    plantData.append("plantName", JSON.stringify(this.state.plantName));
    plantData.append("image", JSON.stringify(this.state.plantImg));
    plantData.append("temperature", JSON.stringify(this.state.temperature));
    plantData.append("waterFrequency", JSON.stringify(this.state.waterFrequency));
    plantData.append("lastWatering", JSON.stringify(this.state.lastWatering));
    plantData.append("isThriving", JSON.stringify(this.state.isThriving));

    // const url: string = `${APIURL}/plants/create`;
    fetch(`${APIURL}/plants/create`, {
      method: "POST",
      headers: new Headers({
        //  "Content-Type": "application/json",
        Authorization: `${this.props.token}`,
      }),
      body: plantData,
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          plantName: "",
          temperature: "",
          waterFrequency: "",
          lastWatering: "",
          isThriving: true,
        });
        this.props.fetchPlants();
        console.log(data);
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

  handleTrueButton(e: MouseEvent) {
    e.preventDefault();
    this.setState({ isThriving: true });
  }
  handleFalseButton(e: MouseEvent) {
    e.preventDefault();
    this.setState({ isThriving: false });
  }

  singleFileChangedHandler = (e: any) => {
    this.setState({
      plantImg: e.target.files[0],
    });
  };
  //form.addEventListener('submit', (event) => {event.preventDefault(); this.submitForm()});

  render() {
    return (
      <div>
        <button className="btn" onClick={this.handleOpen}>
          Add a plant!
        </button>
        <Dialog open={this.state.handleopen} onClose={this.handleClose}>
          <h1>Add a new plant</h1>
          <DialogContent id="register">
            <input
              placeholder="plant name"
              value={this.state.plantName}
              onChange={(e: any) => this.setState({ plantName: e.currentTarget.value })}
            />
            <br />
            <input
              accept="image/*"
              className="imgInput"
              id="contained-button-file"
              onChange={this.singleFileChangedHandler}
              //multiple
              type="file"
            />
            <br />
            <input
              type="temperature"
              placeholder="temperature"
              value={this.state.temperature}
              onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ temperature: e.currentTarget.value })}
            />
            <br />
            <input
              type="waterFrequency"
              placeholder="waterFrequency"
              value={this.state.waterFrequency}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                this.setState({ waterFrequency: e.currentTarget.value })
              }
            />
            <br />
            <input
              type="lastWatering"
              placeholder="lastWatering"
              value={this.state.lastWatering}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                this.setState({ lastWatering: e.currentTarget.value })
              }
            />
            <br />
            <h3>Is your plant thriving?</h3>
            <button className="btn" onClick={this.handleTrueButton.bind(this)}>
              True
            </button>
            <button className="btn" onClick={this.handleFalseButton.bind(this)}>
              False
            </button>
            <br />
          </DialogContent>
          <DialogActions id="Createbtn">
            <Button onClick={this.handleSubmit} id="btn">
              Add Plant
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
