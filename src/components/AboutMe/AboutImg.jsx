import React from "react";

const AboutImg = () => {
  return (
    <div className="relative h-[20rem] w-[30rem]">
    <div className="absolute h-[20rem] w-[30rem] overflow-hidden rounded-3xl">
      <img 
        src="/images/robo.png" 
        className="h-[20rem] w-[30rem] object-fill"
        alt="Robot" 
      />
    </div>
    <div className="absolute -z-10 -bottom-8 -left-8 h-[20rem] w-[30rem] bg-blue-300 rounded-bl-3xl rounded-tr-3xl rounded-br-md rounded-tl-md">
    </div>
  </div>
  );
};

export default AboutImg;
