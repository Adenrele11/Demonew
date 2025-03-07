import React from "react";
import Headerc from "./Headerc";

function Third() {
  return (
    <>
      <div className="bg-black h-screen w-screen text-white">
        <div
          className="px-5
  "
        >
          <Headerc />
          <h1 className="text-left font-bold text-3xl mt-3 ">
            Learn at <br /> Your own pace
          </h1>
          <img className="mt-7" src="/src/images/OBJECTS3.png" alt="" />
        </div>

        <button className="bg-[#07F893] px-3 py-1 rounded-lg border-0 flex items-center gap-3 ml-auto mr-6 mt-25 font-bold text-[18px]">
          NEXT{" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              stroke="#000"
              stroke-width="2"
              d="M2,12 L22,12 M13,3 L22,12 L13,21"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
}

export default Third;
