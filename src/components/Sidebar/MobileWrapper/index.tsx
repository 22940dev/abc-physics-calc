import React, { useState } from "react";
import cx from "classnames";
import styles from "./styles.module.scss";

interface MobileWrapperProps {
  children: any;
}

const MobileWrapper: React.FunctionComponent<MobileWrapperProps> = ({
  children: C
}: MobileWrapperProps) => {
  const [visible, setVisible] = useState(false);
  const toggleSidebar = (): void => setVisible(!visible);

  return (
    <div className={visible ? styles.sidebarMobileWrapper : ""}>
      <div
        onClick={toggleSidebar}
        className={cx(styles.toggle, visible ? styles.toggleOpen : "")}
      >
        <span />
        <span />
        <span />
      </div>
      {visible && React.cloneElement(C, { toggleSidebar })}
    </div>
  );
};

export default MobileWrapper;
