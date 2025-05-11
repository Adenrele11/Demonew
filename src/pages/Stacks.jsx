import React from "react";

function Stacks() {
  return (
    <>
      <div className="pt-4 px-3">
        <h1 className="text-center  font-bold text-3xl font-mono">
          ESSENTIALS
        </h1>

        <div className="bg-neutral-900  rounded-xl border-5 border-green-600 px-3 py-3 mt-3 font-bold">
          <h1 className="text-green-600 text-2xl font-bold font-mono ">
            OVERALL
          </h1>
          {/* GRADES  */}
          <div className="flex justify-between text-white for grades font-bold">
            <h1>Grades</h1>
            <h1>
              A <span className="text-green-500">+</span>
            </h1>
          </div>
          {/* RETENTION  */}
          <div className="flex justify-between text-white for grades">
            <h1>Retention</h1>
            <h1>
              C <span className="text-green-500">+</span>
            </h1>
          </div>
          {/* RETENTION  */}
          <div className="flex justify-between text-white for grades">
            <h1>Streak</h1>
            <h1>
              A <span className="text-green-500">+</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stacks;
