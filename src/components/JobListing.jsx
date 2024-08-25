import React, { useContext } from "react";
import SetFilter from "./SetFilter";
import { FilteringContext } from "../contexts/FilteringProvider";
import Job from "./Job";

function JobListing() {
  const { filteredArray } = useContext(FilteringContext);

  return (
    <div className="flex flex-col gap-y-10 pb-8">
      {filteredArray.map((job) => (
        <Job job={job} key={job.id} />
      ))}
    </div>
  );
}

export default JobListing;
