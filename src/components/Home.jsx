import React from "react";

export default function Home() {
  return (
    <div id="home" className="w-full h-screen px-5 lg:px-[72px]">
      <div className=" h-screen max-w-[700px] flex flex-col justify-center gap-y-5">
        <h1 className="font-bold text-orange-500 text-[20px]">
          GET A BETTER ADVICE
        </h1>
        <h1 className="font-bold text-5xl">
          Let's find a Best Doctor Around the World
        </h1>
        <p className="max-w-[500px]" style={{ color: "#808080" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          ullam aliquid fugit voluptatum cupiditate dolorem necessitatibus,
        </p>
        <div>
          <button className="px-6 lg:px-8 py-2 bg-orange-500 text-white outline-none rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
