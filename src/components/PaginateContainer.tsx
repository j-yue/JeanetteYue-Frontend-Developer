import { useContext } from "react";
import { PaginateContext } from "../context/PaginateContext";
import { DataContext } from "../context/DataContext";
import { ApiDataType } from "./types";
import PaginateCard from "./PaginateCard";
import PaginateNavigation from "./PaginateNavigation";

// get subset of data that is in range according to current page and number of items to show
function getDataInRange(page: number, count: number, data: ApiDataType[]) {
  const startIndex = (page - 1) * count;
  return data.slice(startIndex, startIndex + count);
}

export default function PaginateContainer() {
  const { dimensions, setDimensions } = useContext(PaginateContext);
  const { data } = useContext(DataContext);
  const { currentPage, count } = dimensions;
  const lastPage = Math.ceil(data.length / count);
  const dataToRender = getDataInRange(currentPage, count, data);

  const setCurrentPage = (newPage: number) => {
    const newDimension = { currentPage: newPage, count };
    setDimensions(() => newDimension);
  };

  return (
    <>
      <div className="flex flex-col gap-grid">
        <div className="grid grid-cols-1 gap-grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {dataToRender.map((capsule, index) => {
            return (
              <PaginateCard
                capsule={capsule}
                key={`${capsule.capsule_serial}+${index}`}
              />
            );
          })}
        </div>
        <PaginateNavigation
          pageLimit={lastPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}
