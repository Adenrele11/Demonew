import React from "react";
import Header from "./Header";

function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Logged in");
  }

  return (
    <>
      <Header />
      <div className="flex h-[90dvh] bg-neutral-900 items-center justify-center">
        <div className="w-full max-w-sm bg-neutral-800 p-6 rounded-xl shadow-lg text-white">
          <header className="flex justify-center mb-4">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              role="img"
              viewBox="0 0 24 24"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-600"
            >
              <path d="M18.078,16.345c-0.209-0.261-8.709-11.13-9.005-11.496..." />
            </svg>
          </header>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 text-sm" htmlFor="username">
                Username
              </label>
              <input
                className="w-full p-2 rounded bg-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
                type="text"
                name="username"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-1 text-sm" htmlFor="password">
                Password
              </label>
              <input
                className="w-full p-2 rounded bg-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-neutral-800 py-2 rounded font-semibold hover:shadow-lg transition duration-300"
            >
              Login
            </button>
          </form>
          <footer className="flex justify-between mt-4 text-sm">
            <a className="text-green-600 hover:underline" href="#">
              Forgot Password?
            </a>
            <a className="text-green-600 hover:underline" href="#">
              Create Account
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Login;
