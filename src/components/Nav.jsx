import { useState } from "react";
// import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
function Nav() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-80 p-6 bg-white rounded-2xl shadow-lg">
        <div className="flex justify-between items-center mb-4"></div>
        <div className="flex flex-col items-center text-center">
          <img
            src="/illustration.png"
            alt="Illustration"
            className="w-40 h-40 mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Get Started</h2>
          <p className="text-sm text-gray-600 mt-2">
            Explore new ways to enhance your productivity and learning journey.
          </p>
          <div className="flex space-x-2 mt-4">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${
                  activeIndex === index ? "bg-gray-800" : "bg-gray-400"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
