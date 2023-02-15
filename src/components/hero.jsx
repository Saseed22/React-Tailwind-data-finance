import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mx-auto w-full mt-[96px] h-screen text-center flex flex-col">
        <p className="p-2 font-bold text-green-400">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold md:py-6">
          Grow with data
        </h1>
        <div className="flex justify-center items-center">
          <p className="text-xl sm:text-4xl md:text-5xl font-bold py-4">
            fast, flexible, financing for{" "}
          </p>
          <TypeAnimation
            sequence={[
              "BTB", // Types 'One'
              1000, // Waits 1s
              "BTC", // Deletes 'One' and types 'Two'
              1000, // Waits 2s
              "SASS", // Types 'Three' without deleting 'Two'
              1000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            className="text-xl sm:text-4xl text-gray-500 md:text-5xl font-bold pl-2"
          />
        </div>
        <p className="text-xl md:text-2xl font-bold text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
          hic.
        </p>
        <button className="bg-green-400 w-[200px] rounded-md mx-auto font-medium my-6 py-3 text-black">
          {" "}
          Get started
        </button>
      </div>
    </div>
  );
};

export default Hero;
