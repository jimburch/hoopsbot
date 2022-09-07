import React, { useContext } from "react";
import styles from "./Tweet.module.css";
import { Profile, Stats, Share } from "../index.jsx";
import TakeContext from "../../contexts/TakeContext";

const Tweet = () => {
  const { take } = useContext(TakeContext);

  return (
    <div className={styles.root}>
      <Profile />
      <span className={styles.text}>{take.take}</span>
      <Stats take={take} />
      <Share take={take} />
    </div>
  );
};

export default Tweet;
