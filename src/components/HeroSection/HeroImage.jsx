import React from "react";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center h-64">
      <div className="flex-shrink-0">
        <img
          src="/images/Mypic.jpeg"
          alt="Nikhil Raj"
          className="w-32 h-32 md:w-60 md:h-60 rounded-full z-10 relative object-cover"
        />
      </div>
    </div>
  );
}