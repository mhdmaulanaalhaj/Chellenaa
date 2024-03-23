import React from "react";
import { features } from "../data/dummy";

export default function Banner() {
  return (
    <div className="px-5 lg:px-[72px] flex flex-col gap-y-4 mt-5">
      <h3 className="text-orange-500 text-[20px] font-bold">3 STEPS QUICK</h3>
      <h1 className="font-bold text-3xl">Claim Your Better Health</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map((item, i) => {
          return (
            <div className="flex flex-col col-span-1 items-center">
              <div className="w-[500px] h-[300px]">
                <img src={item.image} alt="" className="w-full h-full" />
              </div>
              <h1 className="font-bold text-[18px]">{item.title}</h1>
              <p
                className="text-[14px] max-w-[300px] text-center"
                style={{ color: "#808080" }}
              >
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
