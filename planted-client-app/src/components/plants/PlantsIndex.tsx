import { Component } from "react";

import PlantsCreate from "./PlantsCreate";
import { Row, Col } from "antd";

import { Card } from "@material-ui/core/";

import "./plantsDisplay.css";

import PlantEdit from "./PlantEdit";

// import "./plantsDisplay.css";

interface Props {
  updateToken: (newToken: string) => void;
  token: string;
  plantEdit: any;
  // fetchPlants:() => void,
}

type State = {
  plantUpdate: any;
  plantUpdateActive: boolean;
  plantCreateActive: boolean;
  userPlants: Array<{
    id: number;
    plantName: string;
    plantImg: string;
    temperature: string;
    waterFrequency: string;
    lastWatering: string;
    isThriving: boolean;
  }> | null;
};

export default class PlantIndex extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      plantUpdate: {},
      userPlants: null,
      plantUpdateActive: false,
      plantCreateActive: false,
    };
  }

  fetchPlants = () => {
    fetch("http://localhost:4000/plants/userplants", {
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
          userPlants: data.userPlants,
        });
        console.log("tester", data.userPlants);
        console.log("testing", this.state.userPlants);
      });
  };

  plantDelete = (plant: any) => {
    fetch(`http://localhost:4000/plants/${plant.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    }).then(() => this.fetchPlants());
  };

  componentWillMount() {
    this.fetchPlants();
  }

  editUpdateMyPlants = (plant: any) => {
    this.setState({
      plantUpdate: plant,
    });
  };

  updateOn = () => {
    this.setState({
      plantUpdateActive: true,
    });
  };

  updateOff = () => {
    this.setState({
      plantUpdateActive: false,
    });
  };

  render() {
    return (
      <div className="plantsDis">
        <h1>Hello</h1>

        <PlantsCreate token={this.props.token} fetchPlants={this.fetchPlants} />
        {/* <Grid container direction="row"> */}
        <Row gutter={[32, 32]}>
          {this.state.userPlants
            ? this.state.userPlants.map((plant) => (
                <Col span={6}>
                  <ul key={plant.id}>
                    <Card className="plantCard">
                      <li className="plantName">{plant.plantName}</li>

                      <li>
                        <img className="cardImg" src={plant.plantImg} alt="plant" />
                      </li>
                      <li>Temperature: {plant.temperature}</li>
                      <li>Water Frequency: {plant.waterFrequency}</li>
                      <li>Last Watering: {plant.lastWatering}</li>
                      <li>{plant.isThriving}</li>
                      <button
                        className="cardbtn"
                        onClick={() => {
                          this.editUpdateMyPlants(plant);
                          this.updateOn();
                        }}
                      >
                        Update
                      </button>
                      <button
                        className="cardbtn"
                        onClick={() => {
                          this.plantDelete(plant);
                        }}
                      >
                        Delete
                      </button>
                    </Card>
                  </ul>
                </Col>
              ))
            : undefined}
        </Row>
        {/* </Grid> */}
        {/* <button onClick={this.editUpdateMyPlants} >
                {this.state.plantUpdateActive ? 
                  <PlantEdit plantId={this.plant.id.bind(this)} plantUpdate={this.state.plantUpdate}
                  updateOff={this.updateOff.bind(this)}
                  token={this.props.token}
                  />
                  : <></>
                } 
                </button>
              */}
        <br />

        {/* <button onClick={this.updateOn}>
                     {this.state.plantUpdateActive ? 
             <PlantEdit  plantUpdate={this.state.plantUpdate}
                   updateOff={this.updateOff.bind(this)}
                   token={this.props.token}
                    />
                    : <>Button</>
                    } 
                </button>
                 <h1>Tesing</h1> */}
        {/* {this.state.plantUpdateActive ? 
        <PlantEdit plantUpdate={this.state.plantUpdate}
              updateOff={this.updateOff.bind(this)}
              token={this.props.token}
               />
               : <></>
               } */}
        {this.state.plantUpdateActive ? (
          <PlantEdit
            plantUpdate={this.state.plantUpdate}
            updateOff={this.updateOff.bind(this)}
            token={this.props.token}
            fetchItems={this.fetchPlants}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
}
