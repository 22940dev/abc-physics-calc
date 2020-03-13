import React, { useState } from "react";
import astrodynamics from "generated-tokens/astrodynamics/formulas.json";
import { Link } from "react-router-dom";
import cx from "classnames";
import kebabCase from "lodash/kebabCase";
import toLower from "lodash/toLower";
import Highlighter from "react-highlight-words";
import styles from "../styles.module.scss";

const Searchbox: React.FunctionComponent = () => {
  const [input, setInput] = useState("");
  const list = Object.values(astrodynamics);

  const handleInputChange = (value: string): void => setInput(value);
  const filteredList = list.filter(({ name }) =>
    toLower(name).includes(toLower(input))
  );

  return (
    <div className={styles.searchboxWrapper}>
      <input
        className={cx("px-2", styles.input)}
        onChange={(e): void => handleInputChange(e.target.value)}
        placeholder="Search for equation (ex. eddington)"
        value={input}
      />
      {input.length > 0 && (
        <ul className={cx("mt-2 py-2 px-3", styles.list)}>
          {filteredList.length === 0 && (
            <p className="mb-0 d-flex">No results found.</p>
          )}
          {filteredList.length > 0 &&
            filteredList.map(({ name }) => (
              <li key={`searchbar_${name}`}>
                <Link to={kebabCase(name)}>
                  <Highlighter
                    caseSensitive={false}
                    searchWords={input.split(" ")}
                    highlightClassName={styles.highlighted}
                    textToHighlight={name}
                  />
                </Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Searchbox;
