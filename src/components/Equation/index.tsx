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
  const missingInputValue = inputValues.some(v => v === "");

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
    const r = missingInputValue ? 0 : calculatedValue;

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
    <Card className={cx("pl-0", styles.card)}>
      <Card.Header>
        <h5 className="mb-0">Calculation</h5>
      </Card.Header>
      <Card.Body>
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
                key={field[0].desc}
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
      </Card.Body>
      <Card.Footer className="d-flex flex-column pt-1">
        <div>Result:</div>
        <div className={cx("d-flex align-items-center", styles.result)}>
          {result}{" "}
          {missingInputValue && (
            <span className={cx("ml-1", styles.resultNotice)}>
              (In order to see the result provide values to all inputs)
            </span>
          )}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Equation;
