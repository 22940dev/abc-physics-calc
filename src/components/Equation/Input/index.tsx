import React from "react";
import { EquationInputProps } from "../interface";

const EquationInput: React.FunctionComponent<EquationInputProps> = ({
  field,
  inputValues,
  index,
  handleInputChange
}: EquationInputProps) => (
  <div className="mb-3">
    <label className="mb-0" htmlFor={field.desc}>
      {field.desc}
    </label>
    <div className="d-flex">
      <input
        id={field.desc}
        type="number"
        placeholder="0"
        className="mr-2"
        value={inputValues[index]}
        disabled={!!field.value}
        onChange={(e): void => handleInputChange(index, e.target.value)}
      />
      {field.unit && <div dangerouslySetInnerHTML={{ __html: field.unit }} />}
    </div>
  </div>
);

export default EquationInput;
