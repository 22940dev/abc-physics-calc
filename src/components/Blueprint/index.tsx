import React from "react";
import { Card } from "react-bootstrap";
import _ from "lodash";
import { BlueprintProps } from "./interface";
import variableTokens from "../../generated-tokens/astrodynamics/variables.json";
import styles from "./styles.module.scss";

const Blueprint: React.FunctionComponent<BlueprintProps> = ({
  formula: { blueprint, variables, result }
}: BlueprintProps) => {
  const entries = Object.entries(variableTokens);
  const normalizedVariableTokens: any = entries.filter(
    v =>
      v[0] !== "TVSELECT_L" &&
      v[0] !== "TVSELECT_M" &&
      _.flatten(variables).includes(v[0])
  );
  const [, decompressedResult]: any = entries.find(k => k[0] === result);

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
            <tr>
              <td
                className="p-1"
                dangerouslySetInnerHTML={{ __html: decompressedResult.symbol }}
              />
              <td className="pl-3"> {decompressedResult.desc}</td>
            </tr>
            {normalizedVariableTokens.map(({ 1: value }: any) => (
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
