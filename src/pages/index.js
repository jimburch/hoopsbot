import React, { useState, useEffect } from "react";
import axios from "axios";
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
    await axios.get("/api/takes").then((response) => {
      setTake(response.data);
      setTimeout(() => {
        setLoading(false);
      }, "1500");
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
