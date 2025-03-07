import React from "react";
import Headerc from "./Headerc";
import { Link } from "react-router-dom";

function Fourth() {
  return (
    <>
      <div className="bg-black h-screen w-screen text-white">
        <Headerc />
        <div
          className="px-5 flex
"
        >
          <div className="m-auto mt-5">
            <h1 className="text-center font-bold text-3xl mt-3 ">
              Collaborate <br /> With Peers
            </h1>
            <img className="mt-7" src="/src/assets/OBJECTS4.png" alt="" />
          </div>
        </div>
        <Link
          to={"/Hero"}
          className="bg-[#07F893] py-1 rounded-lg px-2 font-bold text-[18px]"
        >
          Get Started
        </Link>
      </div>
    </>
  );
}

export default Fourth;
