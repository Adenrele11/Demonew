import React, { useRef } from "react";
import Headerc from "./Headerc";
import { useNavigate } from "react-router-dom";
import objectImage from "../assets/OBJECTS2.png";
function PageNew() {
  const navigate = useNavigate();
  const startX = useRef(0);

  const handlePointerDown = (e) => {
    startX.current = e.clientX;
  };

  const handlePointerUp = (e) => {
    if (startX.current - e.clientX > 50) {
      navigate("/Third");
    }
  };

  return (
    <>
      <div className="h-screen w-screen  text-white bg-gradient-to-b from-green-600 to-neutral-800">
        <Headerc />
        <div
          className="px-5 flex
      "
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          <div className="m-auto mt-5 ">
            <h1 className="text-center font-bold text-3xl mt-3">
              Find global <br /> learning groups
            </h1>
            <img className="mt-7" src={objectImage} alt="Objects" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNew;
