import React from "react";
import Headerc from "./Headerc";
import { Link } from "react-router-dom";
import objectImage from "../assets/OBJECTS4.png";

function Fourth() {
  return (
    <>
      <div className=" bg-gradient-to-b from-green-600 to-neutral-800 h-screen w-screen text-white">
        <Headerc />
        <div
          className="px-5 flex
"
        >
          <div className="m-auto mt-5">
            <h1 className="text-center font-bold text-3xl mt-3 text-white">
              Collaborate <br /> With Peers
            </h1>
            <img className="mt-7" src={objectImage} alt="Objects" />
          </div>
        </div>
        <div className="flex justify-end mt-12">
          <Link
            to={"/Hero"}
            className="bg-green-600 py-1 rounded-lg px-2 font-bold text-[18px]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}

export default Fourth;
