import React from "react";
import cx from "classnames";
import styles from "../styles.module.scss";

interface LinkProps {
  to: string;
  children: string;
}

const Link: React.FunctionComponent<LinkProps> = ({
  to,
  children
}: LinkProps) => (
  <a href={to} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const SidebarFooter: React.FunctionComponent = () => (
  <div className={cx("mr-2 pt-3", styles.sidebarFooter)}>
    <div>
      Advanced Physics Calculator is a successor of archived{" "}
      <Link to="https://sbsrnt.github.io/PhysicsCalc/">PhysicsCalc v.1.0.</Link>
    </div>
    <div className="mt-2">
      Built with <Link to="https://reactjs.org/">React.js</Link>,{" "}
      <Link to="https://www.typescriptlang.org/">TypeScript</Link> &{" "}
      <Link to="https://sass-lang.com/">Sass</Link>.
    </div>
    <div>
      Author: <Link to="https://github.com/sbsrnt">Sebastian Krzyżanowski</Link>
    </div>
    <div>
      Project code (github):{" "}
      <Link to="https://github.com/sbsrnt/physics-calc-v2">
        physics-calc-v2
      </Link>
    </div>
  </div>
);

export default SidebarFooter;
