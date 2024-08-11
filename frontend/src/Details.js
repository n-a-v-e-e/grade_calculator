
import React, { useState } from 'react';
import Navbar from './Navbar';

function GradeCalculator() {
  const [classes, setClasses] = useState([
    [{ className: '', marks: '', gradePercentage: '', gradeLetter: '' }]
  ]);

  // Function to handle adding a new assessment within a class
  const addAssessment = (classIndex) => {
    const newClasses = [...classes];
    newClasses[classIndex].push({ className: '', marks: '', gradePercentage: '', gradeLetter: '' });
    setClasses(newClasses);
  };

  // Function to handle adding a new class
  const addClass = () => {
    setClasses([...classes, [{ className: '', marks: '', gradePercentage: '', gradeLetter: '' }]]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 relative">
      <Navbar />
      <div className="pt-32 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full relative">
          <button
            type="button"
            className="absolute top-5 right-6 px-7 py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Generate
          </button>
          <div className="flex justify-between items-center mb-4">
            <div className="text-left">
              <h1 className="text-3xl font-extrabold text-gray-800">Grade Calculator</h1>
              <p className="text-sm text-gray-500 mt-5">
                Calculate your high school, college, and cumulative GPA. Check your grades and understand how the GPA scale works.
              </p>
            </div>
          </div>
          {classes.map((assessments, classIndex) => (
            <div key={classIndex} className="border border-gray-200 rounded-lg p-4 mb-4">
              <input type="text" placeholder="Class Name" className="mb-4 p-2 border rounded-md w-full" />
              <div className="grid grid-cols-4 gap-4">
              <input type="text" placeholder="e.g. English" className="p-2 border rounded-md" />
                  <input type="text" placeholder="Marks" className="p-2 border rounded-md" />
                  <input type="text" placeholder="Grade (%)" className="p-2 border rounded-md" />
                  <input type="text" placeholder="Grade (Letter)" className="p-2 border rounded-md" />
                  <input type="text" placeholder="e.g. Maths" className="p-2 border rounded-md" />
                  <input type="text" placeholder="Marks" className="p-2 border rounded-md" />
                  <input type="text" placeholder="Grade (%)" className="p-2 border rounded-md" />
                  <input type="text" placeholder="Grade (Letter)" className="p-2 border rounded-md" />
                  <input type="text" placeholder="e.g. Science" className="p-2 border rounded-md" />
                  <input type="text" placeholder="Marks" className="p-2 border rounded-md" />
                  <input type="text" placeholder="Grade (%)" className="p-2 border rounded-md" />
                  <input type="text" placeholder="Grade (Letter)" className="p-2 border rounded-md" />

                {assessments.map((_, assessmentIndex) => (
                  <React.Fragment key={assessmentIndex}>
                    <input type="text" placeholder="e.g. English" className="p-2 border rounded-md" />
                    <input type="text" placeholder="Marks" className="p-2 border rounded-md" />
                    <input type="text" placeholder="Grade (%)" className="p-2 border rounded-md" />
                    <input type="text" placeholder="Grade (Letter)" className="p-2 border rounded-md" />
                  </React.Fragment>
                ))}
              </div>
              <button 
                className="mt-4 text-blue-500 hover:text-blue-600"
                onClick={() => addAssessment(classIndex)}
              >
                + Add Assessment
              </button>
            </div>
          ))}
          <div className="border border-gray-200 rounded-lg p-3">
            <button className=" absolutemt-3 ml-1 text-blue-500 hover:text-blue-600" onClick={addClass}>+ Add Class</button>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 relative"></div>
    </div>
  );
}

export default GradeCalculator;