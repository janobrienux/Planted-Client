import { Component, MouseEvent } from "react";
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';

type PlantState = {
  plantName: string;
  plantImg: string;
  temperature: string;
  waterFrequency: string;
  lastWatering: string;
  isThriving: boolean;
};

interface Props {
// plantCreate: any,
token: string | null;
//  fetchPlants:()=> void
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
    };
  }
  
  handleSubmit = (e: React.SyntheticEvent) => {
    // console.log('oh hi mark')
    e.preventDefault();
    //fetch and set value
    const plantData = new FormData();
    plantData.append('plantName',  this.state.plantName)
     plantData.append('image', this.state.plantImg)
     plantData.append('temperature', this.state.temperature)
    plantData.append('waterFrequency', this.state.waterFrequency)
     plantData.append('lastWatering', this.state.lastWatering)
     plantData.append('isThriving',  JSON.stringify(this.state.isThriving))
    
    const url: string = "http://localhost:4000/plants/create";
    // const bodyObj: PlantState = {
    //   plantName,
    //   plantImg,
    //   temperature,
    //   waterFrequency,
    //   lastWatering,
    //   isThriving,
    // };
    fetch(url, {
      method: "POST",
      body: plantData,
      headers: new Headers({
        //  "Content-Type": "application/json",
        'Authorization': `${this.props.token}`,
      }),
    })
    .then((res) => res.json())
      .then((data) => {
       this.setState({
         plantName: "",
         temperature:"",
         waterFrequency:"",
         lastWatering:"",
         isThriving:true,
       })
        console.log(data);
       
      });
  };

  handleTrueButton(e: MouseEvent) {
    e.preventDefault();
    this.setState({ isThriving: true })
  }
  handleFalseButton(e: MouseEvent) {
    e.preventDefault();
    this.setState({ isThriving: false })
  }

  singleFileChangedHandler = (e: any) => {
    this.setState({
    plantImg: e.target.files[0]

    });
}
  //form.addEventListener('submit', (event) => {event.preventDefault(); this.submitForm()});

  render() {
    return (
      <div>
        <h1>Add a new plant</h1>
        <form onSubmit={this.handleSubmit}  >
          <input
            placeholder="plant name"
            value={this.state.plantName}
            onChange={(e: any) => this.setState({ plantName: e.currentTarget.value })}
          />
          <br />
          <input
        accept="image/*"
        className=''
        id="contained-button-file"
        onChange={this.singleFileChangedHandler}
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        {/* <Button variant="contained" color="primary" component="span">
          Upload
        </Button> */}
      </label>
          {/* <input
            placeholder="plant image"
            value={this.state.file}
            onChange={this.singleFileChangedHandler}
            // onChange=
            // {(e: React.FormEvent<HTMLInputElement>)
            //    => this.setState({ file: e.currentTarget.value })}
          /> */}
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
          <h3>Is your plant thriving?</h3>


          <button className="trueBtn" onClick={this.handleTrueButton.bind(this)}>
            True
          </button>
          <button className="falseBtn" onClick={this.handleFalseButton.bind(this)}>
            False
          </button>
          <br/>
          <button>Add Plant</button>
      </form>
      </div>
    );
  }
}
