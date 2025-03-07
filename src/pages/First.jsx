import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Headerc from "./Headerc";

function First() {
  const navigate = useNavigate();
  const startX = useRef(0);

  const handlePointerDown = (e) => {
    startX.current = e.clientX;
  };

  const handlePointerUp = (e) => {
    if (startX.current - e.clientX > 50) {
      navigate("/Messages");
    }
  };

  return (
    <div
      className="bg-black h-screen w-screen text-white flex"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <div className="m-auto text-center">
        <Headerc />
      </div>
    </div>
  );
}

export default First;
