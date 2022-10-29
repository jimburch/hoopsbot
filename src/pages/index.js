import React, { useState, useEffect } from "react";
import { Header, Tweet, NewTake } from "../components";
import styles from "../styles/Home.module.css";
import TakeContext from "../contexts/TakeContext";

const Home = () => {
  const [take, setTake] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    generateTake();
  }, []);

  const generateTake = async () => {
    setLoading(true);
    await fetch("/api/takes")
      .then((response) => response.json())
      .then((data) => {
        console.log("Front end data: ", data);
        setTake(data);
        setTimeout(() => {
          setLoading(false);
        }, "1000");
      });
  };

  return (
    <TakeContext.Provider value={{ take, setTake }}>
      <div className={styles.root}>
        <Header />
        {loading ? (
          <div
            className={styles.ldsHourglass}
            style={{ margin: "50px 0px 50px 0px" }}
          />
        ) : (
          <Tweet />
        )}
        <NewTake generateTake={generateTake} />
      </div>
    </TakeContext.Provider>
  );
};

export default Home;
