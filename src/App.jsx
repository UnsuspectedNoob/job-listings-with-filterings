import React, { useEffect, useState } from "react";
/*
  "id": 1,
  "company": "Photosnap",
  "logo": "./images/photosnap.svg",
  "new": true,
  "featured": true,
  "position": "Senior Frontend Developer",
  "role": "Frontend",
  "level": "Senior",
  "postedAt": "1d ago",
  "contract": "Full Time",
  "location": "USA Only",
  "languages": ["HTML", "CSS", "JavaScript"],
  "tools": []
 */

function App() {
  const [jobs, setJobs] = useState([]);

  // Initialize Jobs Array.
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  return <div className="text-3xl text-primary-dsatd-cyan">App</div>;
}

export default App;
