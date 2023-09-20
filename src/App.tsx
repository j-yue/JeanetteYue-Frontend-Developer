import { useState } from "react";
import Banner from "./components/Banner";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import { ApiDataType } from "./components/types";
import useFetch from "./components/hooks/useFetch";
import { DataContext } from "./context/DataContext";
import { PaginateContext, PaginateDimensions } from "./context/PaginateContext";

function App() {
  const [url, setUrl] = useState<string>(
    "https://api.spacexdata.com/v3/capsules"
  );

  const [data, setData] = useState<ApiDataType[]>([]);

  const [dimensions, setDimensions] = useState<PaginateDimensions>({
    currentPage: 1,
    count: 5,
  });

  useFetch({ setData: setData });

  return (
    <DataContext.Provider value={{ data, setData }}>
      <PaginateContext.Provider value={{ dimensions, setDimensions }}>
        <Banner />
        <main>
          <Search url={url} setUrl={setUrl} />
          {data && <SearchResults />}
        </main>
      </PaginateContext.Provider>
    </DataContext.Provider>
  );
}

export default App;
