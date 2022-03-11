import React from "react";
import Image from "next/image";

const Preloader = () => {
  return (
    <div>
      <Image
        width={250}
        height={200}
        src="https://i.ibb.co/B3sLcRg/The-Best-50-Website-Preloaders-Around-the-Web-Example-07.gif"
        alt="pre loader image"
      ></Image>
    </div>
  );
};

export default Preloader;
