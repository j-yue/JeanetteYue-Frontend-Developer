import { useContext } from "react";
import { ApiDataType } from "./types";
import Card from "./Card";
import { ModalContext } from "../context/ModalContext";
import spaceship from "../assets/spaceship.png";

interface PaginateCardInterface {
  // One object from an ApiDataType[]
  capsule: ApiDataType;
}

export default function PaginateCard({ capsule }: PaginateCardInterface) {
  const { setCapsule } = useContext(ModalContext);
  const { capsule_serial: id, type, landings } = capsule;

  const handleClick = () => {
    // console.log(capsule);
    setCapsule(() => capsule);
  };
  return (
    <>
      <button onClick={handleClick}>
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
