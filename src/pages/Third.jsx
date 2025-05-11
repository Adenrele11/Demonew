import React, { useRef } from "react";
import Headerc from "./Headerc";
import { useNavigate } from "react-router-dom";
function Third() {
  const navigate = useNavigate();
  const startX = useRef(0);

  const handlePointerDown = (e) => {
    startX.current = e.clientX;
  };

  const handlePointerUp = (e) => {
    if (startX.current - e.clientX > 50) {
      navigate("/Fourth");
    }
  };

  return (
    <>
      <div
        className=" h-screen w-screen  text-white bg-gradient-to-b from-green-600 to-neutral-800"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        <Headerc />
        <div
          className="px-5 flex
  "
        >
          <div className="m-auto mt-5">
            <h1 className=" font-bold text-3xl mt-6 text-center">
              Learn at <br /> Your own pace
            </h1>
            <img className="mt-7" src="/src/assets/OBJECTS3.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Third;
