import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './index.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      alert("Please log in first!");
      navigate("/signin");
      return;
    }

    setUser(JSON.parse(userData));
    fetchJobs(token);
  }, [navigate]);

  const fetchJobs = async (token) => {
    try {
      const response = await axios.get('http://localhost:3001/api/jobs', {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Jobs API Response:", response.data);
      setJobs(response.data.jobs || []);
    } catch (err) {
      setError('Failed to fetch jobs');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading jobs...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2 className="logo">JobStation</h2>
        <nav className="dashboard-nav">
          <button onClick={() => { localStorage.clear(); navigate("/signin"); }} className="logout-btn">Logout</button>
          <button className="dashboard-btn">Dashboard</button>
          <div className="profile-icon"></div>
        </nav>
      </header>
      
      <div className="search-section">
        <input type="text" placeholder="Type any job title" className="search-input" />
        {user?.role === "employer" && <button className="add-job-btn" onClick={() => navigate("/create-job")}>+ Add Job</button>}
        <button className="clear-btn">Clear</button>
      </div>
      
      <div className="job-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <div className="job-header">
              <img src={job.companyLogo} alt={job.company} className="company-logo" />
              <div className="job-info">
                <h3>{job.title}</h3>
                <p><strong>{job.company}</strong></p>
              </div>
            </div>
            <div className="job-details">
              <p><strong>📍</strong> {job.location}</p>
              <p><strong>💰</strong> ₹{job.salary}</p>
            </div>
            <div className="job-tags">
              {job.skills ? job.skills.map((skill, index) => (
                <span key={index} className="job-skill">{skill}</span>
              )) : <span>No skills listed</span>}
            </div>
            <div className="job-actions">
              {user?.role === "employer" && <button className="edit-btn">Edit Job</button>}
              <button className="view-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

