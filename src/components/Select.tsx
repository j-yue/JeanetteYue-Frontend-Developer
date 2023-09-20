import { ComponentPropsWithoutRef } from "react";
import { ApiDataType } from "./types";

interface SelectInterface extends ComponentPropsWithoutRef<"select"> {
  // label text
  label: string;
  // property name filter is associated with via API
  propertyName: string;
  // data to be filtered for values associated with propertyName
  data: ApiDataType[];
}

export default function Select({
  label = "Label",
  propertyName = "test",
  data = [],
  ...args
}: SelectInterface) {
  //use set to remove duplicate values
  const filteredData = new Set(data.map((entry) => entry[propertyName]));

  return (
    <>
      <label className="flex flex-col gap-2">
        {label}
        <select
          data-property={propertyName}
          className="relative rounded p-4 border border-primary-100 hover:cursor-pointer appearance-none"
          {...args}
        >
          <option value="">Unselected</option>
          {[...filteredData].map((entry) => (
            <option key={entry} value={entry}>
              {entry}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}
