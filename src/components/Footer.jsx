import React from "react";
import { apps, googlePlay } from "../asset";

export default function Footer() {
  return (
    <div className="flex flex-col h-auto my-8 lg:my-0 md:flex-row justify-center gap-3  items-center px-5 lg:px-[72px]">
      <div
        className="h-[400px] w-full md:flex-1"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        <img
          src="/images/dokter.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div
        className="flex flex-col gap-3 md:flex-1"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <h1 className="text-[20px] font-bold text-orange-500">
          SECURE YOUR HEALTH
        </h1>
        <h1 className="text-2xl font-bold">Dwonload Your App</h1>
        <p className="text-text text-[14px]">
          We develop an app to allow you to improve your health better in the
          great way
        </p>
        <div className="w-full h-[50px] lg:h-[70px] flex cursor-pointer ">
          <img src={apps} alt="" className="w-[300px] h-full " />
          <img src={googlePlay} alt="" className="w-[300px] h-full " />
        </div>
      </div>
    </div>
  );
}
