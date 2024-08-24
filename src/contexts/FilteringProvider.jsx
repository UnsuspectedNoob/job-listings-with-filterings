import React, { createContext, useState } from "react";

export const FilteringContext = createContext();

function FilteringProvider({ children }) {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);

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
