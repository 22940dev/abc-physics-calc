import React from "react";
import kebabCase from "lodash/kebabCase";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import astrodynamics from "generated-tokens/astrodynamics/formulas.json";
import SidebarFooter from "./SidebarFooter";
import styles from "./styles.module.scss";
import MobileWrapper from "./MobileWrapper";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Sidebar = (props: any) => {
  const ad = Object.values(astrodynamics);

  return (
    <nav className={cx("pt-2 pl-2", styles.sidebar)}>
      <div className={styles.sidebarBody}>
        <h6 className="mb-0">Astrodynamics</h6>
        <ul>
          {ad.map(({ name }) => (
            <li key={`sidebar-${name}`} onClick={props && props.toggleSidebar}>
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
      </div>
      <SidebarFooter />
    </nav>
  );
};

Sidebar.MobileWrapper = MobileWrapper;

export default Sidebar;
