import { createContext } from "react";
import { ApiDataType } from "../components/types";

interface ModalContextInterface {
  capsule: ApiDataType;
  setCapsule: React.Dispatch<React.SetStateAction<ApiDataType>>;
}

const dummyCapsule = {
  capsule_serial: "C205",
  capsule_id: "dragon2",
  status: "active",
  original_launch: null,
  original_launch_unix: null,
  missions: [],
  landings: 0,
  type: "Dragon 2.0",
  details:
    "In construction for use in first mission in contract under the CCtCap contract",
  reuse_count: 0,
};

export const ModalContext = createContext<ModalContextInterface>({
  capsule: dummyCapsule,
  setCapsule: () => {},
});
