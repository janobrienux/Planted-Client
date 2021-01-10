import { Component } from 'react';

type Props ={
  fetchPlants: () => void,
  userPlants: [],
  token:string
}
export default class PlantCard extends Component<Props> {
  constructor(props: Props) {
    super(props)
    this.state = {
    }
  }
  petDelete = (pet: any) => {
    fetch('http://localhost:4000/plants/delete', {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    }).then(() => this.props.fetchPlants())
  }
  
  // plantMapper = () => {
  //   let plants = this.props.userPlants;
  //   return plants.map((plant:any, index:number) => {
  //     return (
  //       <div>
  //         <h1>Your plants</h1>
  //         <ul>
  //           <li>
  //             {plant.plantName}
  //           </li>
  //           </ul>
  //       </div>
  //     )
  //   })
  // }
  render() {
    return(
      <div>
        <h1>
          hi
        </h1>
      </div>
    )
  }
}
