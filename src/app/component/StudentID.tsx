// Import React
import React from 'react';

// StudentCard component
export const StudentCard = ({ name, rollNo, day, studentClass }) => {
  return (
    <div className="bg-orange-300 shadow-md rounded-lg p-6 text-center max-w-xs border border-orange-300">
      <h2 className="text-2xl font-bold mb-2">Student ID Card</h2>
      <p><span className="font-bold">Name:</span> {name}</p>
      <p><span className="font-bold">Roll No:</span> {rollNo}</p>
      <p><span className="font-bold">Day:</span> {day}</p>
      <p><span className="font-bold">Class:</span> {studentClass}</p>
    </div>
  );
};
