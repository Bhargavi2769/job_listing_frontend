import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/signinpage";
import CreateAccountPage from "./pages/createaccountpage";
import Dashboard from "./pages/dashboard";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<CreateAccountPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
