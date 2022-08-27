import React, { useContext } from "react";
import styles from "./Tweet.module.css";
import { Profile, Stats, Share } from "../index.jsx";
import TakeContext from "../../contexts/TakeContext";

const Tweet = () => {
  const { take } = useContext(TakeContext);

  return (
    <div>
      <Profile />
      <p>{take.take}</p>
      <Stats take={take} />
      <Share take={take} />
    </div>
  );
};

export default Tweet;
