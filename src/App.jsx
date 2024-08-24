import React, { useEffect, useState } from "react";
import { headerMobile } from "./assets/images";
import JobListing from "./components/JobListing";
import FilteringProvider from "./contexts/FilteringProvider";

function App() {
  const [job, setJob] = useState([]);

  // Initialize Jobs and Filtered Arrays.
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setJob(data);
      });
  }, []);

  // Check Filters

  return (
    <div>
      <FilteringProvider>
        {/* Image Header Container */}
        <div className="bg-primary-dsatd-cyan mb-14 h-[156px]">
          <img
            src={headerMobile}
            alt="header image"
            className="object-right h-full object-cover"
          />
        </div>

        {/* Filters Section */}
        <div></div>

        {/* Filterings Container */}
        <div className="flex flex-col gap-y-10 px-6">
          {job.map((job) => (
            <JobListing
              company={job.company}
              contract={job.contract}
              featured={job.featured}
              location={job.location}
              logo={job.logo}
              neW={job["new"]}
              position={job.position}
              postedAt={job.postedAt}
              key={job.id}
              filterArray={[
                job.role,
                job.level,
                ...job.languages,
                ...job.tools,
              ]}
            />
          ))}
        </div>
      </FilteringProvider>
    </div>
  );
}

export default App;
