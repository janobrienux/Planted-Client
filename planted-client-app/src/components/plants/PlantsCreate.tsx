import { Component } from "react";

type PlantState = {
  plantName: string;
  file: string;
  temperature: string;
  waterFrequency: string;
  lastWatering: string;
  isThriving: boolean;
};

interface Props {
token: (newToken:string) => void;
}

export default class PlantCreate extends Component<Props, PlantState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      plantName: "",
      file: "",
      temperature: "",
      waterFrequency: "",
      lastWatering: "",
      isThriving: true,
    };
  }

  handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    //fetch and set value
    const plantName: string = this.state.plantName;
    const file: string = this.state.file;
    const temperature: string = this.state.temperature;
    const waterFrequency: string = this.state.waterFrequency;
    const lastWatering: string = this.state.lastWatering;
    const isThriving: boolean = this.state.isThriving;

    const url: string = "http://localhost:4000/plants/create";
    const bodyObj: PlantState = {
      plantName,
      file,
      temperature,
      waterFrequency,
      lastWatering,
      isThriving,
    };
    fetch(url, {
      method: "POST",
      headers: new Headers({
         "Content-Type": "application/json",
        'Authorization': `${this.props.token}`,
      }),
      body: JSON.stringify(bodyObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  render() {
    return (
      <div>
        <h1>Add a new plant</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="plant name"
            value={this.state.plantName}
            onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ plantName: e.currentTarget.value })}
          />
          <br />
          <input
            placeholder="plant image"
            value={this.state.file}
            onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ file: e.currentTarget.value })}
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
            onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ lastWatering: e.currentTarget.value })}
          />
          <br />
          <h3>Is your plant thriving?</h3>
          <button className="trueBtn" color="primary" onClick={() => this.setState({ isThriving: true })}>
            True
          </button>
          <button className="falseBtn" color="secondary" onClick={() => this.setState({ isThriving: false })}>
            False
          </button>
          <br/>
          <button>Add Plant</button>
        </form>
      </div>
    );
  }
}
