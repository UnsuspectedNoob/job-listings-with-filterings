import React, { useEffect, useContext } from "react";
import JobListing from "./components/JobListing";
import { headerMobile } from "./assets/images";

function App() {
  const { setJobs } = useContext(FilteringContext);

  // Initialize Jobs Array
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
      });
  }, [setJobs]);

  return (
    <div>
      {/* Image Header Container */}
      <div className="bg-primary-dsatd-cyan mb-14 h-[156px]">
        <img
          src={headerMobile}
          alt="header image"
          className="object-right h-full object-cover"
        />
      </div>

      {/* Filtered Job Listings */}
      <JobListing />
    </div>
  );
}

export default App;
