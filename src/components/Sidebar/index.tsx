import React, { memo } from "react";
import kebabCase from "lodash/kebabCase";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import astrodynamics from "../../generated-tokens/astrodynamics/formulas.json";
import styles from "./styles.module.scss";

const Sidebar: React.FunctionComponent = () => {
  const ad = Object.values(astrodynamics);
  return (
    <nav className={cx("pt-2 pl-2", styles.sidebar)}>
      <h6 className="mb-0">Astrodynamics</h6>
      <ul>
        {ad.map(({ name }) => (
          <li key={`sidebar-${name}`}>
            <NavLink
              activeClassName={styles.active}
              className="px-3 py-1"
              to={kebabCase(name)}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default memo(Sidebar);
