import React from "react";
import { EquationInputWithSelectProps } from "../interface";

const EquationInputWithSelect: React.FunctionComponent<EquationInputWithSelectProps> = ({
  field,
  selectCategory,
  inputValues,
  index,
  selectIndexes,
  handleInputChange,
  handleSelectChange
}: EquationInputWithSelectProps) => {
  const { desc } = field;
  const { selectIndex } = selectIndexes.find(
    (v: { inputIndex: number }) => v.inputIndex === index
  );

  return (
    <div key={desc} className="mb-3">
      <label className="mb-0" htmlFor={desc}>
        {desc}
      </label>
      <div className="d-flex">
        <input
          id={desc}
          type="number"
          className="mr-1"
          placeholder="0"
          value={inputValues[index]}
          onChange={(e): void => handleInputChange(index, e.target.value)}
        />
        <select
          onChange={(e): void =>
            handleSelectChange(selectIndex, +e.target.value)
          }
        >
          <option value={1}>1</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
    </div>
  );
};

export default EquationInputWithSelect;
