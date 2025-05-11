import React, { useState, useEffect } from "react";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const timeSlots = [
  "8AM - 10AM",
  "10AM - 12PM",
  "1PM - 3PM",
  "3PM - 5PM",
  "7PM - 9PM",
];

function Time() {
  const [entries, setEntries] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem("timetableEntries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("timetableEntries", JSON.stringify(entries));
  }, [entries]);

  const handleEdit = (day, slot) => {
    const key = `${day}-${slot}`;
    const current = entries[key] || "";
    const input = prompt(`Enter a course for ${day} (${slot}):`, current);
    if (input !== null) {
      setEntries({ ...entries, [key]: input });
    }
  };

  return (
    <div className="p-5 bg-neutral-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold text-green-600 text-center mb-6">
        Study Timetable
      </h1>
      <div className="overflow-auto">
        <table className="min-w-full border border-neutral-700 rounded-xl shadow-lg overflow-hidden">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="p-3 border border-neutral-700">Time</th>
              {days.map((day) => (
                <th key={day} className="p-3 border border-neutral-700">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((slot, idx) => (
              <tr
                key={slot}
                className={idx % 2 === 0 ? "bg-neutral-800" : "bg-neutral-700"}
              >
                <td className="p-3 border border-neutral-700 text-green-400 font-medium">
                  {slot}
                </td>
                {days.map((day) => {
                  const key = `${day}-${slot}`;
                  return (
                    <td
                      key={key}
                      className="p-3 border border-neutral-700 text-center cursor-pointer hover:bg-green-700 transition"
                      onClick={() => handleEdit(day, slot)}
                    >
                      {entries[key] ? (
                        <span className="font-medium text-green-200">
                          {entries[key]}
                        </span>
                      ) : (
                        <span className="text-sm italic text-neutral-400">
                          Click to add
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Time;
