import React from "react";
import Search from "./search";
import styles from "../styles/utility.module.css";
import Pagebutton from "./pagebutton";
const Utility = ({ curr, value }) => {
  return (
    <div className={styles.utilityContainer}>
      <Pagebutton current={curr} text="Prev" value={value} />
      <Search />

      <Pagebutton current={curr} text="Next" value={value} />
    </div>
  );
};

export default Utility;
