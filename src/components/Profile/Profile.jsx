import React from "react";
import Image from "next/image";
import profilePic from "../../../public/profile.png";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.root}>
      <Image
        src={profilePic}
        alt="HoopsBot twitter profile pic"
        height={50}
        width={50}
        style={{ borderRadius: "50%" }}
      />
      <div className={styles.info}>
        <span className={styles.name}>HoopsBot</span>
        <span className={styles.handle}>@HoopsBotAI</span>
      </div>
    </div>
  );
};

export default Profile;
