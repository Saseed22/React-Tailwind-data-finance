import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4 lg:mx-auto">
          <h1 className="text-2xl  md:text-3xl font-bold py-3">
            Want tips & tricks to optimize your flow?
          </h1>
          <p> Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4 ">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full ">
            <input
              className="p-3 flex rounded-md w-full text-black"
              type="email"
              placeholder="Enter Email..."
            />
            <button className="bg-green-400 w-[200px] rounded-md ml-4 px-6 font-medium my-6 py-3 text-black">
              {" "}
              Notify Me
            </button>
          </div>
          <p>
            {" "}
            we care about the protection of your data. Read our{" "}
            <a className="text-green-400" href="/">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
