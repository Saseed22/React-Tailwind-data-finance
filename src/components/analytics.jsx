import React from "react";
import laptap from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="bg-white w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={laptap} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-green-400 font-bold ">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold py-3">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            nihil quam impedit adipisci incidunt ducimus optio, odio in! Error
            rerum ex eum commodi harum debitis quidem aliquid vitae sint quis?
          </p>
          <button className="bg-black w-[200px] rounded-md mx-auto md:mx-0 font-medium my-6 py-3 text-green-400">
            {" "}
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
