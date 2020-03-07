import React, { useEffect, useState } from "react";
import { decompressedFormulaVariables } from "utils";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import cx from "classnames";
import { EquationProps } from "./interface";
import EquationInput from "./Input";
import EquationInputWithSelect from "./InputWithSelect";
import * as formulas from "../../formulas/astrodynamics";
import {
  mapInitialInputState,
  mapSelectIndexes,
  mapInitialSelectState,
  mapModifiedValues
} from "./utils";
import styles from "./styles.module.scss";

const Equation: React.FunctionComponent<EquationProps> = ({
  variables = [],
  funcName
}: EquationProps) => {
  /**
   * Hooks
   */
  const { equation } = useParams();

  /**
   * Initial State
   */
  const initialInputState = mapInitialInputState(variables);
  const selectIndexes = mapSelectIndexes(variables);
  const initialSelectState = mapInitialSelectState(selectIndexes);

  const [inputValues, setInputValues] = useState(initialInputState);
  const [selectValues, setSelectValues] = useState(initialSelectState);
  const [result, setResult] = useState(0);

  /**
   * Effects
   */
  useEffect(() => {
    setInputValues(initialInputState);
    setSelectValues(initialSelectState);
  }, [equation]);

  useEffect(() => {
    const numericInputValues = inputValues.map(v => +v);
    const inputsWithSelects = variables.some(v => typeof v !== "string");
    const calculatedValue = inputsWithSelects
      ? formulas[funcName](...numericInputValues)(...selectValues)
      : formulas[funcName](...numericInputValues);
    const r = inputValues.some(v => v === "") ? 0 : calculatedValue;

    setResult(r);
  }, [inputValues, selectValues]);

  /**
   * Handlers
   */
  const handleInputChange = (index: number, value: string): void => {
    const modifiedValue = mapModifiedValues(inputValues, index, value);
    setInputValues(modifiedValue);
  };

  const handleSelectChange = (index: number, value: number): void => {
    const modifiedValue = mapModifiedValues(selectValues, index, value);
    const numericModifiedValue = modifiedValue.map(v => +v);
    setSelectValues(numericModifiedValue);
  };

  return (
    <Card className={cx("p-3 col-6", styles.card)}>
      {decompressedFormulaVariables(variables).map(
        (field: any, index: number) => {
          return field.desc ? (
            <EquationInput
              key={field.desc}
              field={field}
              inputValues={inputValues}
              index={index}
              handleInputChange={handleInputChange}
            />
          ) : (
            <EquationInputWithSelect
              key={field[0][0].desc}
              field={field[0]}
              selectCategory={field[1].selectCategory}
              inputValues={inputValues}
              index={index}
              selectIndexes={selectIndexes}
              handleInputChange={handleInputChange}
              handleSelectChange={handleSelectChange}
            />
          );
        }
      )}
      Result
      <input value={result} readOnly />
    </Card>
  );
};

export default Equation;
