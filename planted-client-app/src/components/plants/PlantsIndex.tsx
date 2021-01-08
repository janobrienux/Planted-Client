import { Component } from 'react';

import PlantsCreate from './PlantsCreate';
import PlantsDisplay from './PlantsDisplay';

type State = {
  userPlants: any,
  // plantCreate: any
}

type Props = {
  token: string | null;
  updateToken:(newToken: string) =>void,
  clearToken:() => void,
  //  fetchPlants:()=> void,
  // plantCreate: any
}

export default class PlantIndex extends Component<Props, State> {
 
  constructor(props: Props) {
    super(props);
    this.state = {
      userPlants:"",
      // plantCreate:""
    };
  }


  
  render() {
    return(
      <div>
        <PlantsCreate  
                  //  fetchPlants={this.props.fetchPlants}
                    token={this.props.token} />
        <br/>
        <PlantsDisplay  
        // plantCreate={this.props.plantCreate} 
               
                    token={this.props.token}
           />
      </div>
    )
  } 
  } 