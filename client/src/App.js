import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getStudents")
      .then((students) => setStudents(students.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>English</th>
            <th>Maths</th>
            <th>Science</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr>
              <td>{student.sname}</td>
              <td>{student.english}</td>
              <td>{student.maths}</td>
              <td>{student.science}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
