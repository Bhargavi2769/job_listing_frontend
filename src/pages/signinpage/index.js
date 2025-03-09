import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

const SigninPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Signin failed");

      // Store token and user details in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Signin successful!");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signin-container">
      {/* Left side - Form */}
      <div className="signin-form-container">
        <h2>Sign In</h2>
        <p>Welcome back! Please login to your account</p>
        {error && <p className="error-message">{error}</p>}
        <form className="signin-form" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Sign In</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
      {/* Right side - Image */}
      <div className="signin-image">
        <h2>Your Personal Job Finder</h2>
      </div>
    </div>
  );
};

export default SigninPage;


