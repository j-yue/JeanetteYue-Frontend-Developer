import { useState, useEffect, useRef } from "react";
import Banner from "./components/Banner";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import { ApiDataType } from "./components/types";
import useFetch from "./components/hooks/useFetch";
import { DataContext } from "./context/DataContext";
import { PaginateContext, PaginateDimensions } from "./context/PaginateContext";
import { ModalContext } from "./context/ModalContext";
import Modal from "./components/Modal";
import { ENDPT } from "./globalVariables";
function App() {
  const [url, setUrl] = useState<string>(ENDPT);

  const [data, setData] = useState<ApiDataType[]>([]);
  const [capsule, setCapsule] = useState<ApiDataType>({});
  const modalRef = useRef<HTMLDialogElement>({});

  const [dimensions, setDimensions] = useState<PaginateDimensions>({
    currentPage: 1,
    count: 5,
  });

  useFetch({ setData: setData });

  useEffect(() => {
    //if capsule not empty object
    if (Object.entries(capsule).length > 0) {
      const modal = modalRef.current;
      modal.showModal();
    }
  }, [capsule]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      <PaginateContext.Provider value={{ dimensions, setDimensions }}>
        <ModalContext.Provider value={{ capsule, setCapsule }}>
          <Banner />
          <main>
            <Search url={url} setUrl={setUrl} />
            {data && <SearchResults />}
          </main>
          <Modal
            capsule={capsule}
            modalRef={modalRef}
            setCapsule={setCapsule}
          />
        </ModalContext.Provider>
      </PaginateContext.Provider>
    </DataContext.Provider>
  );
}

export default App;
