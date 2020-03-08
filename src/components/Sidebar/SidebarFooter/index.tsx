import React from "react";
import cx from "classnames";
import styles from "../styles.module.scss";

const SidebarFooter: React.FunctionComponent = () => (
  <div className={cx("mr-2 pt-3", styles.sidebarFooter)}>
    <div>
      Advanced Physics Calculator is a successor of archived{" "}
      <a
        href="https://sbsrnt.github.io/PhysicsCalc/"
        target="_blank"
        rel="noopener noreferrer"
      >
        PhysicsCalc v.1.0
      </a>
      .
    </div>
    <div className="mt-2">
      Built with{" "}
      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
        React.js
      </a>
      ,{" "}
      <a
        href="https://www.typescriptlang.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        TypeScript
      </a>{" "}
      &{" "}
      <a
        href="https://sass-lang.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sass
      </a>
      .
    </div>
    <div>
      Author:{" "}
      <a
        href="https://github.com/sbsrnt"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sebastian Krzyżanowski
      </a>
    </div>
    <div>
      Project code (github):{" "}
      <a
        href="https://github.com/sbsrnt/physics-calc-v2"
        target="_blank"
        rel="noopener noreferrer"
      >
        physics-calc-v2
      </a>
    </div>
  </div>
);

export default SidebarFooter;
