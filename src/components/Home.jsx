import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  return (
    <div id="home" className="w-full h-screen px-5 lg:px-[72px]">
      <div
        className=" h-screen max-w-[700px] flex flex-col justify-center gap-y-5"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <h1 className="font-bold text-orange-500 text-[20px]">
          GET A BETTER ADVICE
        </h1>
        <h1 className="font-bold text-5xl">
          Let's find a Best Doctor Around the World
        </h1>
        <p className="max-w-[500px]" style={{ color: "#808080" }}>
          We develop an app to allow you to improve your health better and get a
          life you want to life
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
AOS.init();
