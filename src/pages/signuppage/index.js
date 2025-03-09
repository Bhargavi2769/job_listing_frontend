import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "job_seeker",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    console.log("Submitting Data:", formData); // Debugging: Check request data


    try {
      const response = await fetch("http://localhost:3001/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Signup failed");

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Signup successful!");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-container">
      {/* Left side - Form */}
      <div className="signup-form-container">
        <h2>Create an account</h2>
        <p>Your personal job finder is here</p>
        {error && <p className="error-message">{error}</p>}

        <form className="signup-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="job_seeker">Job Seeker</option>
            <option value="employer">Employer</option>
            <option value="admin">Admin</option>
        </select>
          <button type="submit">Create Account</button>
        </form>

        <p>Already have an account? <Link to="/signin">Sign in</Link></p>
      </div>

      {/* Right side - Image */}
      <div className="signup-image">
        <h2>Your Personal Job Finder</h2>
      </div>
    </div>
  );
};

export default SignupPage;

