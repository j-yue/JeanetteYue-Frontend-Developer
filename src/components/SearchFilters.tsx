import { useContext } from "react";
import Select from "./Select";
import { DataContext } from "../context/DataContext";

export default function SearchFilters() {
  const { data } = useContext(DataContext);

  return (
    <>
      <Select label="Status" propertyName="status" data={data} name="Status" />
      <Select
        label="Capsule Type"
        propertyName="type"
        data={data}
        name="Capsule Type"
      />
      <Select
        label="Landings"
        propertyName="landings"
        data={data}
        name="Landings"
      />
    </>
  );
}
