import React, { useEffect, useState } from "react";
import { decompressedFormulaVariables } from "utils";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import cx from "classnames";
import isNaN from "lodash/isNaN";
import variableTokens from "generated-tokens/astrodynamics/variables.json";
import * as formulas from "formulas/astrodynamics";
import { EquationProps } from "./interface";
import EquationInput from "./Input";
import EquationInputWithSelect from "./InputWithSelect";
import {
  mapInitialInputState,
  mapSelectIndexes,
  mapInitialSelectState,
  mapModifiedValues
} from "./utils";
import styles from "./styles.module.scss";

const Equation: React.FunctionComponent<EquationProps> = ({
  variables = [],
  funcName,
  resultToken
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
  const [, decompressedResult]: any = Object.entries(variableTokens).find(
    k => k[0] === resultToken
  );

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
            const inputValue = inputValues[index] || "";
            return field.desc ? (
              <EquationInput
                key={field.desc}
                field={field}
                inputValue={inputValue}
                index={index}
                handleInputChange={handleInputChange}
              />
            ) : (
              <EquationInputWithSelect
                key={field[0].desc}
                field={field[0]}
                selectCategory={field[1].selectCategory}
                inputValue={inputValue}
                index={index}
                selectIndexes={selectIndexes}
                selectValues={selectValues}
                handleInputChange={handleInputChange}
                handleSelectChange={handleSelectChange}
              />
            );
          }
        )}
      </Card.Body>
      <Card.Footer className="d-flex flex-column">
        <h6 className="mb-0">{decompressedResult.desc}</h6>
        <div className={cx("d-flex align-items-center", styles.result)}>
          {isNaN(result) ? "Incorrect values." : result}
          {(!isNaN(result) && decompressedResult.unit && (
            <div
              className="ml-1"
              dangerouslySetInnerHTML={{ __html: decompressedResult.unit }}
            />
          )) ||
            ""}
          {missingInputValue && (
            <span className={cx("ml-1", styles.resultNotice)}>
              (In order to see the result provide values to all fields)
            </span>
          )}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Equation;
