import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import Header from "./Header";

const Tabs = () => {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-4xl p-6 font-mono bg-neutral-900 min-h-screen text-white">
        <h1 className="text-3xl font-bold text-green-600 mb-2">Settings</h1>
        <p className="text-gray-400 mb-8">
          Edit your account information below.
        </p>

        <section className="bg-neutral-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold text-green-600 mb-5">
            General Information
          </h2>

          <div className="flex flex-col md:flex-row items-start gap-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-full w-32"
              alt="Avatar"
            />

            <div className="flex-1">
              <h3 className="text-white text-md mb-1">Add a profile picture</h3>
              <p className="text-sm text-gray-400 mb-3">
                Please upload a square image (1:1 aspect ratio).
              </p>
              <a
                href="#"
                className="inline-block text-green-500 hover:text-green-400 text-lg font-medium transition"
              >
                <FontAwesomeIcon icon={faArrowAltCircleDown} className="mr-2" />
                Upload
              </a>
            </div>
          </div>

          <div className="mt-8">
            <label
              htmlFor="username"
              className="block text-sm mb-2 text-gray-300"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              maxLength="30"
              placeholder="Enter your username"
              className="w-full px-4 py-2 rounded-lg bg-neutral-700 text-white border border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <p className="text-sm text-gray-400 mt-2 mb-6">
              This will be displayed as your username.
            </p>
          </div>

          <div>
            <label htmlFor="bio" className="block text-sm mb-2 text-gray-300">
              Bio
            </label>
            <textarea
              id="bio"
              maxLength="500"
              rows="4"
              placeholder="Tell us a little about yourself..."
              className="w-full p-4 rounded-lg bg-neutral-700 text-white border border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
            <p className="text-sm text-gray-400 mt-2 mb-6">
              This will be visible to other users. Avoid sharing personal
              information.
            </p>
          </div>

          <button
            type="button"
            className="w-full mt-4 bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Update Profile
          </button>
        </section>
      </div>
    </>
  );
};

export default Tabs;
