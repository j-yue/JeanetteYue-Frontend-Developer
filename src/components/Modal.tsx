import { ApiDataType } from "./types";
import spaceship from "../assets/spaceship.png";
import Card from "./Card";
import Button from "./Button";

interface ModalInterface {
  capsule: ApiDataType;
  modalRef: React.MutableRefObject<HTMLDialogElement>;
  setCapsule: React.Dispatch<React.SetStateAction<ApiDataType>>;
}

const testCapsule = {
  capsule_serial: "C112",
  capsule_id: "dragon1",
  status: "active",
  original_launch: "2017-02-19T14:39:00.000Z",
  original_launch_unix: 1487515140,
  missions: [
    {
      name: "CRS-10",
      flight: 36,
    },
  ],
  landings: 1,
  type: "Dragon 1.1",
  details: null,
  reuse_count: 0,
};

function formatData(data: capsule) {
  return Object.entries(data).map((entry) => {
    const [property, value] = entry;
    const propertyStr = property.split("_").join(" ");
    let valueStr = value ? value : "N/A";
    if (property === "missions") valueStr = value.length;
    if (property === "reuse_count") valueStr = value;

    return [propertyStr, valueStr];
  });
}

export default function Modal({
  capsule = testCapsule,
  modalRef,
  setCapsule,
}: ModalInterface) {
  const capsuleData = formatData(capsule);

  // need to reset capsule so that opening a previous capsule modal works
  const handleClose = () => setCapsule({});
  return (
    <dialog
      className="overflow-scroll fixed top-0 w-full h-full p-default"
      ref={modalRef}
    >
      <h4 className="text-center">Details</h4>
      <div className="h-full flex flex-col gap-4">
        {capsuleData.map((entry) => {
          const [property, value] = entry;
          return (
            <p key={`${property}`}>
              <span className="capitalize font-semibold">{property}</span>
              {`: ${value}`}
            </p>
          );
        })}
        <form
          method="dialog"
          className="w-full absolute pb-grid bottom-grid text-center"
        >
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </form>
      </div>
    </dialog>
  );
}
