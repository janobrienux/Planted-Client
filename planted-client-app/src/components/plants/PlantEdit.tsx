import { Component } from "react";

import {
   DialogContent, 
} from '@material-ui/core';


type Props = {
  token: string;
  plantEdit:any;
};

type State = {
  plantName: string;
  plantImg: string;
  temperature: string;
  waterFrequency: string;
  lastWatering: string;
  // editIsThriving: boolean;
};

export default class PlantEdit extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      plantName: this.props.plantEdit.plantName,
      plantImg: "",
      temperature: this.props.plantEdit.temperature,
      waterFrequency: this.props.plantEdit.waterFrequency,
      lastWatering: this.props.plantEdit.lastWatering,
      // editIsThriving: this.state.editIsThriving,
    };
  }

  editPlantPhoto = () => {
    const editPlantPictureData = new FormData();
    editPlantPictureData.append("image", this.state.plantImg);
    fetch("http://localhost:4000/plants/update/id", {
      method: "PUT",
      body: editPlantPictureData,
      headers: new Headers({
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  handlePlantUpdate = (e: any) => {
    e.preventDefault();
    fetch("http://localhost:4000/plants/update/id", {
      method: "PUT",
      body: JSON.stringify({
        plantName: this.state.plantName,
        temperature: this.state.temperature,
        waterFrenquency: this.state.waterFrequency,
        lastWatering: this.state.lastWatering,
        // isThriving: this.state.editIsThriving,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then(() => {
        this.editPlantPhoto();
      })
      .then(() => {
      });
  };

  singleFileChangedHandler = (e: any) => {
    this.setState({
      plantImg: e.target.files[0],
    });
  };

  // handleTrueButton(e: MouseEvent) {
  //   e.preventDefault();
  //   this.setState({ isThriving: true })
  // }
  // handleFalseButton(e: MouseEvent) {
  //   e.preventDefault();
  //   this.setState({ isThriving: false })
  // }



 render() {
   return(
    <form onSubmit={this.handlePlantUpdate}  >
    <DialogContent id="Register">
      <input
        placeholder="plant name"
        value={this.state.plantName}
        onChange={(e: any) => this.setState({ plantName: e.currentTarget.value })}
      />
      <br />
      <input
    accept="image/*"
    className='imgInput'
    id="contained-button-file"
    onChange={this.singleFileChangedHandler}
    multiple
    type="file"
  />
  {/* <label htmlFor="contained-button-file"> */}
    {/* <Button variant="contained" color="primary" component="span">
      Upload
    </Button> */}
  {/* </label> */}
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
        onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ lastWatering: e.currentTarget.value })}
      />
      <br />
      {/* <h3>Is your plant thriving?</h3>
      <button className="btn" onClick={this.handleTrueButton.bind(this)}>
        True
      </button>
      <button className="btn" onClick={this.handleFalseButton.bind(this)}>
        False
      </button>
      <br/> */}
      <button className="btn">Edit Plant</button>
      </DialogContent>
  </form>
   )
 }
  
}
