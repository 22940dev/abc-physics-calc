import React from "react";
import { EquationInputWithSelectProps } from "../interface";
import Select from "../../Select";

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
        <Select
          category={selectCategory}
          onChange={(e): void =>
            handleSelectChange(selectIndex, +e.target.value)
          }
        />
      </div>
    </div>
  );
};

export default EquationInputWithSelect;
