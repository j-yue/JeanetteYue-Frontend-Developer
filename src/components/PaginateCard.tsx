import { ApiDataType } from "./types";
import Card from "./Card";
import spaceship from "../assets/spaceship.png";

interface PaginateCardInterface {
  // One object from an ApiDataType[]
  capsule: ApiDataType;
}

export default function PaginateCard({ capsule }: PaginateCardInterface) {
  const { capsule_serial: id, type, landings } = capsule;

  return (
    <>
      <button>
        <Card>
          <img src={spaceship} className="aspect-3/4" alt="Placeholder image" />
          <h3>{id}</h3>
          <p>{type}</p>
          <p>{landings} Landings(s)!</p>
        </Card>
      </button>
    </>
  );
}
