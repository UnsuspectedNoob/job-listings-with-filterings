import React, { useContext } from "react";
import { FilteringContext } from "../contexts/FilteringProvider";

function SetFilter({ filter }) {
  const { filters, setFilters } = useContext(FilteringContext);

  return (
    <div
      className="bg-neutral-lg-cyan-filter hover:bg-primary-dsatd-cyan px-2 py-1 rounded-md font-bold text-primary-dsatd-cyan hover:text-white cursor-pointer"
      onClick={() => {
        if (filters.includes(filter)) {
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
