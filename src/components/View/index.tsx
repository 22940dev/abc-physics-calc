import React, { Suspense, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { activeEquation } from "utils";
import cx from "classnames";
import Equation from "../Equation";
import styles from "./styles.module.scss";

const View: React.FunctionComponent = () => {
  const history = useHistory();
  const { equation } = useParams();
  const activeEq = activeEquation(equation);

  const [{ name }, { funcName }, { formula }] = activeEquation(equation)[0];
  const [{ blueprint }, { variables }] = formula;

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
        <h5>Astrodynamics</h5>
        <h2 className="mb-3">{name}</h2>
        <Equation variables={variables} funcName={funcName} />
      </Suspense>
    </div>
  );
};

export default View;
