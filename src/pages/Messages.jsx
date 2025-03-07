import React, { useRef } from "react";
import Headerc from "./Headerc";
import { useNavigate } from "react-router-dom";

const Messages = () => {
  const navigate = useNavigate();
  const startX = useRef(0);

  const handlePointerDown = (e) => {
    startX.current = e.clientX;
  };

  const handlePointerUp = (e) => {
    if (startX.current - e.clientX > 50) {
      navigate("/PageNew");
    }
  };
  return (
    <>
      <div
        className="bg-black h-screen w-screen text-white"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        <Headerc />
        <div
          className="px-5 flex
        "
        >
          <div className="m-auto mt-5">
            {" "}
            <h1 className="text-center font-bold text-2xl mt-3 ">
              Engage with <br />
              interactive content
            </h1>
            <img className="mt-5" src="/src/images/OBJECTS.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
