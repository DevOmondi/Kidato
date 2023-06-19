import { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import StudentLogin from "./Components/StudentLogin";
import LecturerLogin from "./Components/LecturerLogin";
import StudentReg from "./Components/StudentReg";
import LecturerReg from "./Components/LecturerReg";
import AdminDashboard from "./Components/AdminDashboard";
import StudentDashboard from "./Components/StudentDashboard";
// create tab context
export const tabContext = createContext(1);
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/lec-login" element={<LecturerLogin />} />
        <Route path="/student-reg" element={<StudentReg />} />
        <Route path="/lec-reg" element={<LecturerReg />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
