import React from "react";
import styles from './Loader.module.css';
const Loader = () => {
  return (
    <div className={styles.root}>
      <div className={styles.loaderwrapper}>
        <div className={styles.loader}></div>
      </div>
    </div>
  );
};

export default Loader;
