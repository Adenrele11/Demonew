import React from "react";
import Headerc from "./Headerc";

const Messages = () => {
  return (
    <>
      <div className="bg-black h-screen w-screen text-white">
        <div
          className="px-5
        "
        >
          <Headerc />
          <h1 className="text-left font-bold text-2xl mt-3 ">
            Engage with interactive content
          </h1>
          <img className="mt-5" src="/src/images/OBJECTS.png" alt="" />
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
};

export default Messages;
