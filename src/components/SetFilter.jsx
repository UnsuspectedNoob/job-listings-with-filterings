import React, { useContext } from "react";
import { FilteringContext } from "../contexts/FilteringProvider";

function SetFilter({ filter }) {
  const { filters, setFilters } = useContext(FilteringContext);

  return (
    <div
      className="bg-neutral-lg-cyan-filter px-2 py-1 rounded-md font-bold text-primary-dsatd-cyan cursor-pointer"
      onClick={() => {
        if (filters.includes(filter)) {
          console.log("Filter already included.");
        } else {
          setFilters([...filters, filter]);
        }
      }}
    >
      {filter}
    </div>
  );
}

export default SetFilter;
