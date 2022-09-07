import React, { useContext } from "react";
import styles from "./Stats.module.css";
import TakeContext from "../../contexts/TakeContext";

const Stats = () => {
  const { take } = useContext(TakeContext);

  return (
    <div className={styles.statsRoot}>
      <div>
        <span className={styles.number}>{take.hot}</span>
        <span className={styles.text}>hot</span>
      </div>
      <div>
        <span className={styles.number}>{take.cold}</span>
        <span className={styles.text}>cold</span>
      </div>
      <div>
        <span className={styles.number}>{take.shares}</span>
        <span className={styles.text}>shares</span>
      </div>
    </div>
  );
};

export default Stats;
