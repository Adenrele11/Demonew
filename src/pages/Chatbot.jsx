import React, { useState } from "react";

function Chatbot() {
  // State to store the conversation
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm your course assistant. What's your course of study?",
      from: "bot",
    },
  ]);

  // State to store user input
  const [userInput, setUserInput] = useState("");
  const [course, setCourse] = useState(""); // to store selected course

  // Predefined set of questions based on courses
  const questions = {
    "Computer Science": [
      "What is your favorite programming language?",
      "Have you worked with databases before?",
      "Are you familiar with algorithms and data structures?",
    ],
    Mathematics: [
      "What area of mathematics interests you most?",
      "Do you prefer pure or applied mathematics?",
      "Have you studied calculus before?",
    ],
    Biology: [
      "What area of biology are you most interested in?",
      "Have you taken any lab courses before?",
      "Are you interested in genetics?",
    ],
  };

  // Function to handle user input submission
  const handleUserInput = () => {
    if (userInput.trim()) {
      // Add the user input to the conversation
      setMessages([...messages, { text: userInput, from: "user" }]);
      setUserInput(""); // clear the input field

      // Ask a new question based on course
      if (course) {
        const courseQuestions = questions[course] || [];
        if (courseQuestions.length > 0) {
          const nextQuestion =
            courseQuestions[Math.floor(Math.random() * courseQuestions.length)];
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: nextQuestion, from: "bot" },
          ]);
        } else {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: "I don't have questions for this course yet!",
              from: "bot",
            },
          ]);
        }
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Please tell me your course of study.", from: "bot" },
        ]);
      }
    }
  };

  // Function to set the course of study
  const handleCourseSelect = (event) => {
    setCourse(event.target.value);
    setMessages([
      { text: `You selected ${event.target.value}. Let's begin!`, from: "bot" },
      { text: "What's your favorite part of this course?", from: "bot" },
    ]);
  };

  return (
    <div
      className="chatbot-container"
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f4f4f9",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 className="text-center text-2xl mb-5">Course Chatbot</h2>

      {/* Course selection */}
      <div className="course-selection">
        <label className="mr-2" htmlFor="course">
          Choose your course of study:{" "}
        </label>
        <select
          id="course"
          value={course}
          onChange={handleCourseSelect}
          className="p-2 rounded"
        >
          <option value="">Select a course</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Biology">Biology</option>
        </select>
      </div>

      {/* Chat messages */}
      <div
        className="chat-window mt-5"
        style={{
          height: "300px",
          overflowY: "scroll",
          padding: "10px",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          marginBottom: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.from}`}
            style={{ marginBottom: "10px" }}
          >
            <div
              className={`message-content ${message.from}`}
              style={{
                display: "inline-block",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: message.from === "bot" ? "#4CAF50" : "#f1f1f1",
                color: message.from === "bot" ? "#fff" : "#000",
                maxWidth: "80%",
              }}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* User input */}
      <div className="input-container">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleUserInput()}
          placeholder="Type your response..."
          className="w-full p-2 rounded"
        />
        <button
          onClick={handleUserInput}
          className="mt-2 w-full bg-green-600 text-white p-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
