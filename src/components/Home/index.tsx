import React from "react";
import cx from "classnames";
import { useWindowWidth } from "hooks/useWindowWidth";
import Searchbox from "./Searchbox";
import styles from "./styles.module.scss";
import { MOBILE_BREAKPOINT } from "../../constants";

const Home: React.FunctionComponent = () => {
  const width = useWindowWidth();

  return (
    <div
      className={cx(
        "d-flex flex-column align-items-center justify-content-center",
        styles.wrapper,
        width < MOBILE_BREAKPOINT ? styles.mobileWrapper : styles.desktopWrapper
      )}
    >
      <h1>Advanced Physics Calculator</h1>
      <Searchbox />
    </div>
  );
};

export default Home;
