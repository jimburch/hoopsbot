import React, { useState, useEffect } from "react";
import axios from "axios";

const LOTTERY_CHANCE = process.env.NEXT_PUBLIC_LOTTERY_CHANCE;

const Home = () => {
  const [savedTake, setSavedTake] = useState();
  const [take, setTake] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    generateTake();
  }, []);

  const generateTake = async () => {
    setLoading(true);
    const lottery = Math.floor(Math.random() * LOTTERY_CHANCE);

    if (lottery === 1) {
      const response = await axios.get("/api/openai").then((response) => {
        setSavedTake(null);
        setTake(response.data);
        console.log(response.data);
      });
    } else {
      const response = await axios.get("/api/takes").then((response) => {
        setSavedTake(response.data);
        setTake(response.data.take);
      });
    }
    setLoading(false);
  };

  const saveTake = async (heat) => {
    if (!savedTake) {
      await axios.post("/api/takes", {
        take: take,
        hot: heat ? 1 : 0,
        cold: !heat ? 1 : 0,
        shares: 0,
      });
    } else {
      await axios.put("/api/takes", {
        id: savedTake.id,
        take: savedTake.take,
        hot: heat ? savedTake.hot + 1 : savedTake.hot,
        cold: !heat ? savedTake.cold + 1 : savedTake.cold,
        updated_at: new Date(),
      });
    }
    generateTake();
  };

  return (
    <div>
      <h1>Hoopsbot2</h1>
      <p>Generating white hot NBA takes using OpenAI</p>
      <p>Take: {take}</p>
      {!savedTake && take ? (
        <p>This is a certified fresh take from OpenAI</p>
      ) : null}
      {loading ? (
        <p>A hot take is on the way</p>
      ) : (
        <div>
          <button onClick={() => saveTake(true)}>Oh, That&apos;s Hot</button>
          <button onClick={() => saveTake(false)}>
            Naw, That&apos;s Garbage
          </button>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURI(
              take
            )}&via=HoopsBotAI`}
            target="_blank"
            rel="noreferrer"
          >
            <button>Fire, Tweet It</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Home;
