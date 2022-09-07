import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header, Tweet, NewTake } from "../components";
import styles from "../styles/Home.module.css";
import TakeContext from "../contexts/TakeContext";

const LOTTERY_CHANCE = process.env.NEXT_PUBLIC_LOTTERY_CHANCE;

const Home = () => {
  const [take, setTake] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    generateTake();
  }, []);

  const generateTake = async () => {
    setLoading(true);
    const lottery = Math.floor(Math.random() * LOTTERY_CHANCE);

    if (lottery === 1) {
      const response = await axios.get("/api/openai").then((response) => {
        setTake(response.data);
      });
    } else {
      const response = await axios.get("/api/takes").then((response) => {
        setTake(response.data);
      });
    }
    setLoading(false);
  };

  if (loading) return <div>loading</div>;

  return (
    <TakeContext.Provider value={{ take, setTake }}>
      <div className={styles.root}>
        <Header />
        <Tweet />
        <NewTake generateTake={generateTake} />
      </div>
    </TakeContext.Provider>
  );
};

export default Home;

// loading animation
// https://stackabuse.com/how-to-create-a-loading-animation-in-react-from-scratch/
