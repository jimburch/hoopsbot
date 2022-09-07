import React from "react";
import styles from "./NewTake.module.css";

const NewTake = ({ generateTake }) => {
  return (
    <button className={styles.newTakeRoot} onClick={generateTake}>
      Generate Fresh Hot Take
    </button>
  );
};

export default NewTake;
