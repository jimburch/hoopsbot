import React from "react";
import Image from "next/image";
import profilePic from "../../../public/profile.png";

const Profile = () => {
  return (
    <Image
      src={profilePic}
      alt="HoopsBot twitter profile pic"
      height={50}
      width={50}
      style={{ borderRadius: "50%" }}
    />
  );
};

export default Profile;
