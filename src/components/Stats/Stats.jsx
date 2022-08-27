import React, { useContext } from "react";
import styles from "./Stats.module.css";
import TakeContext from "../../contexts/TakeContext";

const Stats = () => {
  const { take } = useContext(TakeContext);

  return (
    <div>
      <p>{`${take.hot} hot`}</p>
      <p>{`${take.cold} cold`}</p>
      <p>{`${take.shares} shares`}</p>
    </div>
  );
};

export default Stats;
