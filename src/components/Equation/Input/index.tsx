import React from "react";
import { EquationInputProps } from "../interface";

const EquationInput: React.FunctionComponent<EquationInputProps> = ({
  field,
  inputValues,
  index,
  handleInputChange
}: EquationInputProps) => (
  <div>
    {field.desc}
    <div className="d-flex">
      <input
        type="number"
        placeholder="0"
        value={inputValues[index]}
        disabled={!!field.value}
        onChange={(e): void => handleInputChange(index, e.target.value)}
      />
      {field.unit && <div dangerouslySetInnerHTML={{ __html: field.unit }} />}
    </div>
  </div>
);

export default EquationInput;
