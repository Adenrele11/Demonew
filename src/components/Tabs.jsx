import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import Header from "./Header";

const Tabs = () => {
  const [course, setCourse] = useState(""); // state to hold the course of study
  const [bio, setBio] = useState(""); // state to hold the bio data
  const [image, setImage] = useState(null); // state to store the selected image

  // Load the course, bio, and image from localStorage when the component mounts
  useEffect(() => {
    const savedCourse = localStorage.getItem("courseOfStudy");
    const savedBio = localStorage.getItem("bio");
    const savedImage = localStorage.getItem("image");

    if (savedCourse) {
      setCourse(savedCourse);
    }
    if (savedBio) {
      setBio(savedBio);
    }
    if (savedImage) {
      setImage(savedImage); // Set image from localStorage if exists
    }
  }, []);

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result; // Convert image to base64
        setImage(base64Image);
        localStorage.setItem("image", base64Image); // Save the base64 image to localStorage
      };
      reader.readAsDataURL(file); // Read the image file as base64
    }
  };

  // Handle course change
  const handleCourseChange = (e) => {
    setCourse(e.target.value); // update course state
  };

  // Handle bio change
  const handleBioChange = (e) => {
    setBio(e.target.value); // update bio state
  };

  // Save course to localStorage
  const handleCourseUpdate = () => {
    localStorage.setItem("courseOfStudy", course); // Save course to localStorage
    alert("Course of study updated!");
  };

  // Save bio to localStorage
  const handleBioUpdate = () => {
    localStorage.setItem("bio", bio); // Save bio to localStorage
    alert("Bio updated!");
  };

  return (
    <>
      <Header />
      <div className="mx-auto max-w-4xl p-6 font-mono bg-neutral-900 min-h-screen text-white">
        <h1 className="text-3xl font-bold text-green-600 mb-2">Settings</h1>
        <p className="text-gray-400 mb-8">
          Edit your account information below.
        </p>

        <section className="bg-neutral-800 p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-lg font-semibold text-green-600 mb-5">
            General Information
          </h2>

          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Avatar */}
            <div className="flex justify-center items-center">
              <div className="relative">
                <img
                  src={
                    image || "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  } // Default avatar if no image is selected
                  alt="Avatar"
                  className="rounded-full w-32 h-32 object-cover"
                />
                <label
                  htmlFor="file-upload"
                  className="absolute bottom-0 right-0 bg-green-600 text-white p-2 rounded-full cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={faArrowAltCircleDown}
                    className="text-xl"
                  />
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                </label>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-white text-md mb-1">Add a profile picture</h3>
              <p className="text-sm text-gray-400 mb-3">
                Please upload a square image (1:1 aspect ratio).
              </p>
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
              value={bio}
              onChange={handleBioChange} // Handle bio input change
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
            onClick={handleBioUpdate} // Update bio when clicked
            className="w-full mt-4 bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Update Bio
          </button>
        </section>

        {/* Course of Study Section */}
        <section className="bg-neutral-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold text-green-600 mb-5">
            Course of Study
          </h2>

          <div>
            <label
              htmlFor="course"
              className="block text-sm mb-2 text-gray-300"
            >
              Your Course of Study
            </label>
            <input
              id="course"
              type="text"
              value={course}
              onChange={handleCourseChange} // Handle course input change
              placeholder="Enter your course of study"
              className="w-full px-4 py-2 rounded-lg bg-neutral-700 text-white border border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <p className="text-sm text-gray-400 mt-2 mb-6">
              This will be displayed on your profile and is part of your
              education details.
            </p>
          </div>

          <button
            type="button"
            onClick={handleCourseUpdate} // Update course when clicked
            className="w-full mt-4 bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Update Course of Study
          </button>
        </section>
      </div>
    </>
  );
};

export default Tabs;
