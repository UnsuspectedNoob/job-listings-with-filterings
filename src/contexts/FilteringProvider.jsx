import React, { createContext, useEffect, useState } from "react";

export const FilteringContext = createContext();

function FilteringProvider({ children }) {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    if (filters.length === 0) {
      setFilteredArray(jobs);
    } else {
      const filtered = jobs.filter((job) =>
        filters.every((filter) =>
          [job.role, job.level, ...job.languages, ...job.tools].includes(filter)
        )
      );
      setFilteredArray(filtered);
    }
  }, [jobs, filters]);

  return (
    <FilteringContext.Provider
      value={{
        jobs,
        setJobs,
        filters,
        setFilters,
        filteredArray,
        setFilteredArray,
      }}
    >
      {children}
    </FilteringContext.Provider>
  );
}

export default FilteringProvider;
