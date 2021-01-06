
import PlantsCreate from './PlantsCreate';

interface PlantProps {
 token: (newToken: string) => void;
}

const CreatePlant = (props: PlantProps) => {
return (
      <div>
        <h1>
          Add your plant
        </h1>
    
    <PlantsCreate token={props.token} />
      </div>
    )
}
export default CreatePlant;






