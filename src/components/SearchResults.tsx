import { useContext } from "react";
import { DataContext } from "../context/DataContext";

import PaginateContainer from "./PaginateContainer";
export default function SearchResults() {
  const { data } = useContext(DataContext);

  return (
    <>
      <section className="p-default">
        <h2>Capsule Results</h2>
        <p className="mb-grid">{data.length} results found!</p>

        <PaginateContainer />
      </section>
    </>
  );
}
