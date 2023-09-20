import { useRef, useContext } from "react";
import { DataContext } from "../context/DataContext";
import { PaginateContext } from "../context/PaginateContext";
import SearchFilters from "./SearchFilters";
import Button from "./Button";
import useFetch from "./hooks/useFetch";
import { ENDPT } from "../globalVariables";

interface SearchInterface {
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
}

// generate param strings to append to url based on fields selected
function urlParamsFromSelect(
  selectList: NodeListOf<HTMLSelectElement> | undefined
) {
  const paramsArr: string[] = [];
  selectList?.forEach((select) => {
    const {
      value,
      dataset: { property },
    } = select;
    if (value !== "") paramsArr.push(`${property}=${value}`);
  });
  return paramsArr.join("&").replace(" ", "%20");
}

export default function Search({ url, setUrl }: SearchInterface) {
  const { setData } = useContext(DataContext);
  const { dimensions, setDimensions } = useContext(PaginateContext);
  const formRef = useRef<HTMLFormElement | null>(null);

  useFetch({ url: url, setData: setData });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const selectList = formRef.current?.querySelectorAll("select");
    setUrl(() => [ENDPT, urlParamsFromSelect(selectList)].join(""));
    const newDimension = { currentPage: 1, count: dimensions.count };
    setDimensions(() => newDimension);
  };

  return (
    <>
      <section className="flex flex-col p-default gap-grid" id="search">
        <h2>Search Capsules</h2>
        <p>Filter capsules with following categories</p>

        <form
          id="form"
          ref={formRef}
          className="grid grid-cols-1 gap-grid sm:grid-cols-2 lg:sm:grid-cols-3"
          onSubmit={(e) => handleSubmit(e)}
        >
          <SearchFilters />
        </form>
        <div className="w-full text-center">
          <Button type="submit" variant="primary" form="form">
            Search
          </Button>
        </div>
      </section>
    </>
  );
}
