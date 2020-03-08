import React from "react";
import { Card } from "react-bootstrap";
import _ from "lodash";
import { BlueprintProps } from "./interface";
import variableTokens from "../../generated-tokens/astrodynamics/variables.json";
import styles from "./styles.module.scss";

const Blueprint: React.FunctionComponent<BlueprintProps> = ({
  formula
}: BlueprintProps) => {
  const [{ blueprint }, { variables }] = formula;
  const normalizedVariableTokens: any = Object.entries(variableTokens).filter(
    v =>
      v[0] !== "TVSELECT_L" &&
      v[0] !== "TVSELECT_M" &&
      _.flatten(variables).includes(v[0])
  );

  const reducedVariableTokens = normalizedVariableTokens.reduce(
    (acc, value) => {
      const mergedValues = value[1].reduce((a, v) => ({ ...a, ...v }), {});
      return [...acc, mergedValues];
    },
    []
  );
  return (
    <Card className={styles.card}>
      <Card.Header>
        <h5 className="mb-0">Formula</h5>
      </Card.Header>
      <Card.Body className="p-0">
        <table>
          <thead>
            <tr>
              <td colSpan={2} dangerouslySetInnerHTML={{ __html: blueprint }} />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2} className="pl-3">
                Where:
              </td>
            </tr>
            {reducedVariableTokens.map(value => (
              <tr key={`blueprint_${value.desc}`}>
                <td
                  className="p-1"
                  dangerouslySetInnerHTML={{ __html: value.symbol }}
                />
                <td className="pl-3">{value.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card.Body>
    </Card>
  );
};

export default Blueprint;
