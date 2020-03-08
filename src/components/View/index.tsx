import React, { Suspense, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { activeEquation } from "utils";
import cx from "classnames";
import { Col, Row } from "react-bootstrap";
import Equation from "../Equation";
import styles from "./styles.module.scss";
import Blueprint from "../Blueprint";

const View: React.FunctionComponent = () => {
  const history = useHistory();
  const { equation } = useParams();
  const activeEq = activeEquation(equation);

  const { name, funcName, formula } = activeEquation(equation)[0];
  const { variables } = formula;

  useEffect(() => {
    document.title = `Astrodynamics - ${name}`;
  }, [equation]);

  if (activeEq.length === 0) {
    history.push("/");
    return null;
  }

  return (
    <div className={cx("px-4 py-3", styles.view)}>
      <Suspense fallback={<div>loading</div>}>
        <Row className="d-flex flex-column">
          <Col sm={12}>
            <h5>Astrodynamics</h5>
            <h2>{name}</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={6} className="mt-3">
            <Equation variables={variables} funcName={funcName} />
          </Col>
          <Col sm={12} md={12} lg={6} className="mt-3">
            <Blueprint formula={formula} />
          </Col>
        </Row>
      </Suspense>
    </div>
  );
};

export default View;
