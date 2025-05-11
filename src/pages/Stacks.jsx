// import React from "react";

// function Stacks() {
//   return (
//     <>
//       <div className="pt-4 px-3">
//         <h1 className="text-center  font-bold text-3xl font-mono">
//           ESSENTIALS
//         </h1>

//         <div className="bg-neutral-900  rounded-xl border-5 border-green-600 px-3 py-3 mt-3 font-bold">
//           <h1 className="text-green-600 text-2xl font-bold font-mono ">
//             OVERALL
//           </h1>
//           {/* GRADES  */}
//           <div className="flex justify-between text-white for grades font-bold">
//             <h1>Grades</h1>
//             <h1>
//               A <span className="text-green-500">+</span>
//             </h1>
//           </div>
//           {/* RETENTION  */}
//           <div className="flex justify-between text-white for grades">
//             <h1>Retention</h1>
//             <h1>
//               C <span className="text-green-500">+</span>
//             </h1>
//           </div>
//           {/* RETENTION  */}
//           <div className="flex justify-between text-white for grades">
//             <h1>Streak</h1>
//             <h1>
//               A <span className="text-green-500">+</span>
//             </h1>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Stacks;

import React, { useState } from "react";

function Stacks() {
  const [answers, setAnswers] = useState({ q1: "", q2: "", q3: "", q4: "" });
  const [grade, setGrade] = useState("");
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Define the correct answers for the questions
  const correctAnswers = {
    q1: "B",
    q2: "A",
    q3: "C",
    q4: "D",
  };

  // Questions for the quiz
  const questions = [
    {
      id: "q1",
      question: "What is the capital of France?",
      options: ["A) London", "B) Paris", "C) Rome", "D) Berlin"],
    },
    {
      id: "q2",
      question: "Which element has the chemical symbol 'O'?",
      options: ["A) Oxygen", "B) Hydrogen", "C) Nitrogen", "D) Carbon"],
    },
    {
      id: "q3",
      question: "What is the largest planet in our solar system?",
      options: ["A) Earth", "B) Venus", "C) Jupiter", "D) Mars"],
    },
    {
      id: "q4",
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: [
        "A) Charles Dickens",
        "B) William Wordsworth",
        "C) Shakespeare",
        "D) Oscar Wilde",
      ],
    },
  ];

  // Handle the change in selected answer
  const handleAnswerChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Calculate grade based on correct answers
  const calculateGrade = () => {
    let correctCount = 0;
    Object.keys(correctAnswers).forEach((key) => {
      if (answers[key] === correctAnswers[key]) {
        correctCount++;
      }
    });

    // Calculate grade based on correct answers
    let grade;
    if (correctCount === 4) {
      grade = "A+";
    } else if (correctCount === 3) {
      grade = "A";
    } else if (correctCount === 2) {
      grade = "B";
    } else if (correctCount === 1) {
      grade = "C";
    } else {
      grade = "F";
    }
    setGrade(grade);
  };

  // Handle the form submission to calculate grade
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateGrade();
    setQuizSubmitted(true);
  };

  // Reset the quiz content after submission
  const handleResetQuiz = () => {
    setAnswers({ q1: "", q2: "", q3: "", q4: "" });
    setQuizSubmitted(false);
  };

  return (
    <>
      <div className="pt-4 px-6">
        <h1 className="text-center font-bold text-4xl text-neutral-100 font-mono">
          ESSENTIALS
        </h1>

        <div className="bg-neutral-900 rounded-xl border-4 border-green-600 px-6 py-5 mt-6">
          <h1 className="text-green-600 text-3xl font-bold font-mono mb-4">
            QUIZ
          </h1>

          {/* Quiz Form */}
          {!quizSubmitted && (
            <form onSubmit={handleSubmit}>
              {questions.map((q) => (
                <div key={q.id} className="mb-5">
                  <p className="text-white font-bold mb-2">{q.question}</p>
                  <div className="flex flex-col">
                    {q.options.map((option, index) => (
                      <label key={index} className="text-white mb-2">
                        <input
                          type="radio"
                          name={q.id}
                          value={option.charAt(0)}
                          onChange={handleAnswerChange}
                          checked={answers[q.id] === option.charAt(0)}
                          className="mr-2"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              <button
                type="submit"
                className="bg-green-600 text-white py-2 px-4 rounded-lg font-bold hover:bg-green-700"
              >
                Submit Quiz
              </button>
            </form>
          )}
        </div>

        {/* Grades, Retention, and Reasoning sections */}
        <div className="bg-neutral-900 rounded-xl border-4 border-green-600 px-6 py-5 mt-6">
          <h1 className="text-green-600 text-3xl font-bold font-mono mb-4">
            OVERALL
          </h1>
          {/* GRADES */}
          <div className="flex justify-between text-white font-bold">
            <h1>Grades</h1>
            <h1>
              {quizSubmitted ? (
                grade
              ) : (
                <span className="text-gray-500">Not Submitted Yet</span>
              )}
            </h1>
          </div>
          {/* RETENTION */}
          <div className="flex justify-between text-white font-bold">
            <h1>Retention</h1>
            <h1>
              C <span className="text-green-500">+</span>
            </h1>
          </div>
          {/* STREAK */}
          <div className="flex justify-between text-white font-bold">
            <h1>Streak</h1>
            <h1>
              A <span className="text-green-500">+</span>
            </h1>
          </div>

          {/* Reset Quiz Button */}
          {quizSubmitted && (
            <button
              onClick={handleResetQuiz}
              className="mt-5 bg-red-600 text-white py-2 px-4 rounded-lg font-bold hover:bg-red-700"
            >
              Retake Quiz
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Stacks;
