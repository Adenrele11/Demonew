import React, { useRef } from "react";
import Headerc from "./Headerc";
import { useNavigate } from "react-router-dom";
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
      <div className="bg-black h-screen w-screen text-white ">
        <Headerc />
        <div
          className="px-5 flex
      "
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          <div className="m-auto mt-5">
            <h1 className="text-left font-bold text-3xl mt-3">
              Find global <br /> learning groups
            </h1>
            <img className="mt-7 " src="/src/assets/OBJECTS2.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNew;
