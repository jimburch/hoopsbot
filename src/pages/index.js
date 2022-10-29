import React, { useState, useEffect } from "react";
import { Header, Tweet, NewTake } from "../components";
import styles from "../styles/Home.module.css";
import TakeContext from "../contexts/TakeContext";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_BEARER_TOKEN = process.env.NEXT_PUBLIC_API_BEARER_TOKEN;

const Home = ({ newTake }) => {
  const [take, setTake] = useState(newTake);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   generateTake();
  // }, []);

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

export const getStaticProps = async () => {
  const response = await fetch(`${API_URL}/hoopsbot/random`, {
    headers: new Headers({
      Authorization: `bearer ${API_BEARER_TOKEN}`,
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      throw new Error(error);
    });

  return {
    props: {
      newTake: response,
    },
  };
};

export default Home;
