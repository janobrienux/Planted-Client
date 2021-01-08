import { Component } from 'react';
// import PlantCreate from './PlantsCreate';


type UserPlantState = {
  userPlants: []
    // plantName: string,
    // plantImg: string,
    // temperature: string,
    // waterFrequency: string,
    // lastWatering: string,
    // isThriving: boolean,

  // plantCreate: any
}

interface Props {
  token: string | null;
  // updateToken:(newToken: string) =>void,
  // clearToken:() => void,
  // fetchPlants: () => void,
}

export default class UserPlants extends Component<Props, UserPlantState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userPlants:[],
        // plantName: '',
        // plantImg: '',
        // temperature: '',
        // waterFrequency: '',
        // lastWatering: '',
        // isThriving: true
      
    }
  }


  
  fetchPlants() {
    fetch('http://localhost:4000/plants/userplants', {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        'Authorization': `${this.props.token}`,
    
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('response', data);
        this.setState({
          userPlants: data.userPlants
        });
      });
  }
  componentDidMount() {
    this.fetchPlants()
    console.log(this.props.token);
  }

  render() {
    return (
      <div>
        
      <h1>testing</h1>
      <ul>
        <li>
          {this.state.userPlants}
          </li>
      </ul>
      </div>
    //   <div>
    //  {this.state.userPlants === [] ? null :  this.state.userPlants.map((plants: any, index:any) => {
    //    return(
    //      <div key={index}>
    //        <ul>
    //          <li>
    //            {plants.plantName}
    //            </li>
    //            <li>
    //            {plants.plantImg}
    //            </li>
    //            <li>
    //            {plants.temperature}
    //            </li>
    //            <li>
    //            {plants.waterFrequency}
    //            </li>
    //            <li>
    //            {plants.plantName}
    //            </li>
               
    //          </ul>
    //      </div>
    //    )
    //  })}
    //   </div>
    )
  }
}

  
  // render() {
  //   return (
  //     <div>
  //    {this.state.userPlants.map((plants: any, index:number) => {
  //      return(
  //        <div>
  //          <ul>
  //            <li>
  //              {plants.plantName}
  //              </li>
  //              <li>
  //              {plants.plantImg}
  //              </li>
  //              <li>
  //              {plants.temperature}
  //              </li>
  //              <li>
  //              {plants.waterFrequency}
  //              </li>
  //              <li>
  //              {plants.plantName}
  //              </li>
               
  //            </ul>
  //        </div>
  //      )
  //    })}
  //     </div>
  //   )
  // }







