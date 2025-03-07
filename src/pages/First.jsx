import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function First() {
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
    <div
      className="bg-black h-screen w-screen text-white flex"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <div className="m-auto text-center">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          role="img"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="text-9xl text-[#07F893] m-auto"
        >
          <path d="M18.078,16.345c-0.209-0.261-8.709-11.13-9.005-11.496c-0.279-0.366-0.209-0.47-0.157-0.523 c0.105-0.122,0.261-0.105,0.871-0.105c0.366,0,3.989-0.017,4.372-0.017c0.784,0,0.906,0.07,0.993,0.087 c0.087,0.035,0.296,0.209,0.453,0.383c0.087,0.105,7.699,9.214,7.768,9.301c0.087,0.105,0.209,0.279,0.314,0.435 c0.087,0.157,0.105,0.366-0.035,0.453c-0.087,0.052-4.302,1.794-4.424,1.829c-0.122,0.052-0.348,0.139-0.523,0.105 C18.618,16.798,18.357,16.676,18.078,16.345z"></path>
        </svg>
        <h1 className="text-7xl font-bold font-mono hover:text-[#07F893] cursor-pointer">
          AVAIA
        </h1>
      </div>
    </div>
  );
}

export default First;
