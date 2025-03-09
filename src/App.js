import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignupPage from "./pages/signuppage";
import SigninPage from "./pages/signinpage";
import Dashboard from "./pages/dashboard";

const PrivateRoute = ({ element }) => {
  return localStorage.getItem("token") ? element : <Navigate to="/signin" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />  {/* 👈 Add this line */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} /> 
      </Routes>
    </Router>
  );
}

export default App;
