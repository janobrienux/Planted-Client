import { Component } from "react";

import React from "react";
//Reactstrap
import { Form, FormGroup, Modal, ModalHeader, ModalBody } from "reactstrap";
//Material UI
import TextField from "@material-ui/core/TextField";
import ClearIcon from "@material-ui/icons/Clear";

import IconButton from "@material-ui/core/IconButton/IconButton";

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
      plantImg: "",
      editTemperature: this.props.plantUpdate.temperature,
      editWaterFrequency: this.props.plantUpdate.waterFrequency,
      editLastWatering: this.props.plantUpdate.lastWatering,
    };
  }

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
    }).then(() => {
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

                <button type="submit">Update changes</button>
              </FormGroup>
              <br />
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}
