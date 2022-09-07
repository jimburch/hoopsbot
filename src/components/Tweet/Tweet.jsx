import React, { useContext } from "react";
import styles from "./Tweet.module.css";
import { Profile, Stats, Share } from "../index.jsx";
import TakeContext from "../../contexts/TakeContext";

const Tweet = () => {
  const { take } = useContext(TakeContext);

  const createdAt = new Date(take.created_at);
  const time = createdAt.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = createdAt.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className={styles.tweetRoot}>
      <Profile />
      <span className={styles.text}>{take.take}</span>
      <span className={styles.time}>
        {`${time} · ${date} · `}
        <a
          href="https://github.com/JimBurch/hoopsbot"
          target="_blank"
          rel="noreferrer"
        >
          HoopsBot by Jim Burch
        </a>
      </span>
      <Stats take={take} />
      <Share take={take} />
    </div>
  );
};

export default Tweet;
