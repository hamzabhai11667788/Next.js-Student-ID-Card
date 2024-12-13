
import {StudentCard} from '../app/component/StudentID'
// Main App component
const App = () => {
  // Sample student data
  const students = [
    { name: 'Hamza', rollNo: '123422', day: 'Monday', studentClass: 'GIAIC Quarter 2' },
    { name: 'Jameel', rollNo: '125633', day: 'thusday', studentClass: 'GIAIC Quarter 2' },
    { name: 'Hashmat', rollNo: '352033', day: 'Sunday', studentClass: 'GIAIC Quarter 2' },
  ];

  return (
    <div className="bg-blue-100 py-10">
      <h1 className="text-center text-2xl font-bold mb-8">STUDENT ID  CARDS</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {students.map((student, index) => (
          <StudentCard 
            key={index} 
            name={student.name} 
            rollNo={student.rollNo} 
            day={student.day} 
            studentClass={student.studentClass} 
          />
        ))}
      </div>
    </div>
  );
};

export default App;