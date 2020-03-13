import React from "react";
import { SelectProps } from "./interfaces";

const mass = [
  {
    label: "mg",
    value: 1
  },
  {
    label: "g",
    value: 1000
  },
  {
    label: "kg",
    value: 1000000
  },
  {
    label: "oz",
    value: 28349.5231
  },
  {
    label: "lb",
    value: 453592.37
  },
  {
    label: "dr",
    value: 1.77184519531
  },
  {
    label: "gr",
    value: 0.06479891
  }
];

const length = [
  {
    label: "mm",
    value: 10
  },
  {
    label: "cm",
    value: 10
  },
  {
    label: "dm",
    value: 0.1
  },
  {
    label: "m",
    value: 0.01
  },
  {
    label: "km",
    value: 0.001
  },
  {
    label: "mi",
    value: 0.000006213711922373
  },
  {
    label: "in",
    value: 0.3937007874016
  },
  {
    label: "ft",
    value: 0.03280839895013
  },
  {
    label: "yd",
    value: 0.01093613298338
  }
];

const Select: React.FunctionComponent<SelectProps> = ({
  category,
  onChange,
  selectedValue
}: SelectProps) => (
  <select onChange={onChange} value={selectedValue}>
    {(category === "L" ? length : mass).map(({ label, value }, i) => (
      <option key={label} value={value}>
        {label}
      </option>
    ))}
  </select>
);

export default Select;
