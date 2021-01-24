import React from "react";
import Search from "./search";
import styles from "../styles/utility.module.css";
import Pagebutton from "./pagebutton";
const Utility = ({ curr, value }) => {
  return (
    <div className={styles.utilityContainer}>
      <Search />
      <Pagebutton current={curr} text="Prev" value={value} />
      <Pagebutton current={curr} text="Next" value={value} />
    </div>
  );
};

export default Utility;
