import { Component } from 'react';

import PlantsCreate from './PlantsCreate';

import PlantCard from './PlantCard'

import PlantEdit from './PlantEdit'

interface Props  {
  updateToken: (newToken: string) => void
  token: string;
  // fetchPlants:() => void,
}

type State = {
  userPlants: Array <{id: number, plantName: string, plantImg:string, temperature:string, waterFrequency:string, lastWatering:string, isThriving:boolean}>| null
 
}


export default class PlantIndex extends Component<Props, State> {
 
  constructor(props: Props) {
    super(props);
    this.state = {
      userPlants:null,
    };
  }

 

  componentWillMount() {
    fetch('http://localhost:4000/plants/userplants', {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        'Authorization': `${localStorage.getItem('token')}`,
    
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('response', data);
        this.setState({
          userPlants: data.userPlants
        });
        console.log('tester', data.userPlants)
      });
  }

  render() {
    return(
      <div>
        <PlantsCreate token={this.props.token} />
        {this.state.userPlants ? this.state.userPlants.map(plant => (
          <ul key={plant.id}>
            <li>
              {plant.plantName}
            </li>
            <li>
              <img src={plant.plantImg}  alt='plant'/>
              
            </li>
              {plant.temperature}
              {plant.waterFrequency}
              {plant.lastWatering}
              <li>
              {plant.isThriving}
            </li>
          </ul>

        )): undefined}
        
        {/* <br/>
        <PlantEdit token={this.props.token} /> */}
      </div>
    )
  } 
}

