import { useContext } from "react";
import Select from "./Select";
import { DataContext } from "../context/DataContext";

export default function SearchFilters() {
  const { data } = useContext(DataContext);

  return (
    <>
      <Select label="Status" propertyName="status" data={data} />
      <Select label="Capsule Type" propertyName="type" data={data} />
      <Select label="Landings" propertyName="landings" data={data} />
    </>
  );
}
