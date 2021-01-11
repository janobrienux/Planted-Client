import { Component } from "react";

import React from "react";
//Reactstrap
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from "reactstrap";
//Material UI
import TextField from "@material-ui/core/TextField";
import ClearIcon from "@material-ui/icons/Clear";
// import CreateIcon from "@material-ui/icons/Create";
import IconButton from "@material-ui/core/IconButton/IconButton";
// import APIURL from "../../../../helpers/environment";

type Props = {
  plantUpdate: any;
  updateOff: () => void;
  token: string;
  fetchItems: () => void;
};

type State = {
  editPlantName: string;
  plantImg: string;
  editTemperature: string;
  editWaterFrequency: string;
  editLastWatering: string;
};

export default class PlantEdit extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      editPlantName: this.props.plantUpdate.plantName,
      plantImg: '',
      editTemperature: this.props.plantUpdate.temperature,
      editWaterFrequency: this.props.plantUpdate.waterFrequency,
      editLastWatering:this.props.plantUpdate.lastWatering,
    };
  }

  // editPlantPhoto = () => {
  //   const editPetPictureData = new FormData();
  //   editPetPictureData.append("image", this.state.plantImg);
  //   fetch(`http://localhost:4000/plants/update/${this.props.plantId}`, {
  //     method: "PUT",
  //     headers: new Headers({
  //       Authorization: this.props.token,
  //     }),
  //     body: editPetPictureData,
  //   })
  //     .then((res) => res.json())
  //     .catch((err) => console.log(err));
  // };

  handlePlantUpdate = (e: any) => {
    e.preventDefault();
    fetch(`http://localhost:4000/plants/update/${this.props.plantUpdate.id}`, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
      body: JSON.stringify({
        plantName: this.state.editPlantName,
        temperature: this.state.editTemperature,
        waterFrequency: this.state.editWaterFrequency,
        lastWatering: this.state.editLastWatering,
      }),
    })
      .then(() => {
        // this.props.fetchPlants();
        this.props.updateOff();
        this.makeEditWork();
        this.props.fetchItems();
      });
  };

  makeEditWork = () => {
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  closeUpdateModal = () => {
    this.props.updateOff();
  };

  singleFileChangedHandler = (e: any) => {
    this.setState({
      plantImg: e.target.files[0],
    });
  };

  render() {
    return (
      <>
        <Modal className="create-plant-modal" isOpen={true}>
          <ModalHeader>
            Edit Plant
            <IconButton className="exit-btn" onClick={this.closeUpdateModal}>
              <ClearIcon />
            </IconButton>
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handlePlantUpdate}>
            
              <FormGroup>
                <TextField
                  className="modal-text-field"
                  value={this.state.editPlantName}
                  onChange={(e) => this.setState({ editPlantName: e.target.value })}
                  label="Edit Plant Name"
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  className="modal-text-field"
                  value={this.state.editTemperature}
                  onChange={(e) => this.setState({ editTemperature: e.target.value })}
                  label="Edit Temperature"
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  className="modal-text-field"
                  value={this.state.editWaterFrequency}
                  onChange={(e) => this.setState({ editWaterFrequency: e.target.value })}
                  label="Edit water frequency"
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  className="modal-text-field"
                  value={this.state.editLastWatering}
                  onChange={(e) => this.setState({ editLastWatering: e.target.value })}
                  label="Update last watering"
                />
                
            <button type='submit'>Update changes</button>
              </FormGroup>
              <br />
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

// import {
//    DialogContent,
// } from '@material-ui/core';

// type Props = {
//   token: string;
//   plantEdit:any;
// };

// type State = {
//   editplantName: string;
//   editplantImg: string;
//   edittemperature: string;
//   editwaterFrequency: string;
//   editlastWatering: string;
//   // editIsThriving: boolean;
// };

// export default class PlantEdit extends Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       editplantName: this.props.plantEdit.plantName,
//       editplantImg: "",
//       edittemperature: this.props.plantEdit.temperature,
//       editwaterFrequency: this.props.plantEdit.waterFrequency,
//       editlastWatering: this.props.plantEdit.lastWatering,
//       // editIsThriving: this.state.editIsThriving,
//     };
//   }

//   editPlantPhoto = () => {
//     const editPlantPictureData = new FormData();
//     editPlantPictureData.append("image", this.state.editplantImg);
//     fetch("http://localhost:4000/plants/update/id", {
//       method: "PUT",
//       body: editPlantPictureData,
//       headers: new Headers({
//         Authorization: this.props.token,
//       }),
//     })
//       .then((res) => res.json())
//       .catch((err) => console.log(err));
//   };

//   handlePlantUpdate = (e: any) => {
//     e.preventDefault();
//     fetch("http://localhost:4000/plants/update/id", {
//       method: "PUT",
//       body: JSON.stringify({
//         plantName: this.state.editplantName,
//         temperature: this.state.edittemperature,
//         waterFrenquency: this.state.editwaterFrequency,
//         lastWatering: this.state.editlastWatering,
//         // isThriving: this.state.editIsThriving,
//       }),
//       headers: new Headers({
//         "Content-Type": "application/json",
//         Authorization: this.props.token,
//       }),
//     })
//       .then(() => {
//         this.editPlantPhoto();
//       })
//       .then(() => {
//         console.log('testing homie')
//       });
//   };

//   singleFileChangedHandler = (e: any) => {
//     this.setState({
//       editplantImg: e.target.files[0],
//     });
//   };

//   // handleTrueButton(e: MouseEvent) {
//   //   e.preventDefault();
//   //   this.setState({ isThriving: true })
//   // }
//   // handleFalseButton(e: MouseEvent) {
//   //   e.preventDefault();
//   //   this.setState({ isThriving: false })
//   // }

//  render() {
//    return(
//     <form onSubmit={this.handlePlantUpdate}  >
//     <DialogContent id="Register">
//       <input
//         placeholder="plant name"
//         value={this.state.editplantName}
//         onChange={(e: any) => this.setState({ editplantName: e.currentTarget.value })}
//       />
//       <br />
//       <input
//     accept="image/*"
//     className='imgInput'
//     id="contained-button-file"
//     onChange={this.singleFileChangedHandler}
//     multiple
//     type="file"
//   />
//   {/* <label htmlFor="contained-button-file"> */}
//     {/* <Button variant="contained" color="primary" component="span">
//       Upload
//     </Button> */}
//   {/* </label> */}
//       <br />
//       <input
//         type="temperature"
//         placeholder="temperature"
//         value={this.state.edittemperature}
//         onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ edittemperature: e.currentTarget.value })}
//       />
//       <br />
//       <input
//         type="waterFrequency"
//         placeholder="waterFrequency"
//         value={this.state.editwaterFrequency}
//         onChange={(e: React.FormEvent<HTMLInputElement>) =>
//           this.setState({ editwaterFrequency: e.currentTarget.value })
//         }
//       />
//       <br />
//       <input
//         type="lastWatering"
//         placeholder="lastWatering"
//         value={this.state.editlastWatering}
//         onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ editlastWatering: e.currentTarget.value })}
//       />
//       <br />
//       {/* <h3>Is your plant thriving?</h3>
//       <button className="btn" onClick={this.handleTrueButton.bind(this)}>
//         True
//       </button>
//       <button className="btn" onClick={this.handleFalseButton.bind(this)}>
//         False
//       </button>
//       <br/> */}
//       <button className="btn">Edit Plant</button>
//       </DialogContent>
//   </form>
//    )
//  }

// }
