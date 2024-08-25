import React, { useEffect, useContext } from "react";
import JobListing from "./components/JobListing";
import { headerMobile } from "./assets/images";
import { FilteringContext } from "./contexts/FilteringProvider";
import FilterTag from "./components/FilterTag";

function App() {
  const { setJobs, setFilters, filters } = useContext(FilteringContext);

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
      <div
        className={`relative bg-primary-dsatd-cyan ${
          filters.length === 0 && "mb-14"
        } h-[156px]`}
      >
        <img
          src={headerMobile}
          alt="header image"
          className="object-right h-full object-cover"
        />
      </div>

      {/* Filtered Job Listings */}
      <div className="px-6">
        {/* Filter Tags */}
        {filters.length > 0 && (
          <div className="relative bg-white p-6 rounded-[4px] -translate-y-1/2">
            <div className="flex justify-between">
              <div className="flex flex-wrap gap-4">
                {filters.map((filter) => (
                  <FilterTag key={filter} name={filter} />
                ))}
              </div>

              <button className="ml-4" onClick={() => setFilters([])}>
                Clear
              </button>
            </div>
          </div>
        )}

        <JobListing />
      </div>
    </div>
  );
}

export default App;
