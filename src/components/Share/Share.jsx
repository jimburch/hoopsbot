import React, { useState, useContext } from "react";
import axios from "axios";
import styles from "./Share.module.css";
import TakeContext from "../../contexts/TakeContext";
import Image from "next/image";

const Share = () => {
  const [hot, setHot] = useState(false);
  const [cold, setCold] = useState(false);
  const [shared, setShared] = useState(false);
  const { take, setTake } = useContext(TakeContext);

  const setHotTake = async () => {
    await axios
      .put("/api/takes", {
        ...take,
        hot: hot ? take.hot - 1 : take.hot + 1,
        updated_at: new Date(),
      })
      .then(() => {
        hot ? setHot(false) : setHot(true);
        setTake({
          ...take,
          hot: hot ? take.hot - 1 : take.hot + 1,
        });
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  const setColdTake = async () => {
    await axios
      .put("/api/takes", {
        ...take,
        cold: cold ? take.cold - 1 : take.cold + 1,
        updated_at: new Date(),
      })
      .then(() => {
        cold ? setCold(false) : setCold(true);
        setTake({
          ...take,
          cold: cold ? take.cold - 1 : take.cold + 1,
        });
      });
  };

  const setSharedTake = async () => {
    if (!shared) {
      await axios
        .put("/api/takes", {
          ...take,
          shares: take.shares + 1,
          updated_at: new Date(),
        })
        .then(() => {
          setShared(true);
          setTake({
            ...take,
            shares: take.shares + 1,
          });
        });
    }
  };

  return (
    <div className={styles.shareRoot}>
      <button
        className={`${styles.button} ${styles.hotButton}`}
        onClick={setHotTake}
      >
        <Image
          className={hot ? styles.hotIconSelected : styles.iconUnselected}
          src="/hot.svg"
          alt="hot icon"
          height={35}
          width={35}
        />
      </button>
      <button
        className={`${styles.button} ${styles.coldButton}`}
        onClick={setColdTake}
      >
        <Image
          className={cold ? styles.coldIconSelected : styles.iconUnselected}
          src="/cold.svg"
          alt="cold icon"
          height={35}
          width={35}
        />
      </button>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURI(
          take.take
        )}&via=HoopsBotAI`}
        target="_blank"
        rel="noreferrer"
      >
        <button
          className={`${styles.button} ${styles.sharedButton}`}
          onClick={setSharedTake}
        >
          <Image
            className={
              shared ? styles.sharedIconSelected : styles.iconUnselected
            }
            src="/share.svg"
            alt="share icon"
            height={35}
            width={35}
          />
        </button>
      </a>
    </div>
  );
};

export default Share;
