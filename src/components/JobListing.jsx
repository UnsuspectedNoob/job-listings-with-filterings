import React, { useContext } from "react";
import SetFilter from "./SetFilter";
import { FilteringContext } from "../contexts/FilteringProvider";

function JobListing() {
  const { filteredArray } = useContext(FilteringContext);

  return (
    <div className="flex flex-col gap-y-10 px-6">
      {filteredArray.map((job) => (
        <div
          key={job.id}
          className={`relative flex flex-col gap-y-3 bg-white px-6 pb-6 border border-transparent ${
            job.new && job.featured
              ? "border-l-[6px] border-l-primary-dsatd-cyan"
              : ""
          } rounded-md`}
        >
          <div className="absolute w-12 h-12 -translate-y-1/2">
            <img src={job.logo} alt="profile icon" />
          </div>

          <div className="flex items-center mt-8">
            <div className="flex items-center mr-6 rounded-xl font-bold text-[16px] text-primary-dsatd-cyan self-end">
              <p>{job.company}</p>
            </div>

            {job.new && (
              <div className="flex items-center bg-primary-dsatd-cyan mr-2 px-2 rounded-xl font-bold text-[15px] text-white">
                <p>NEW!</p>
              </div>
            )}

            {job.featured && (
              <div className="flex items-center bg-neutral-vdg-cyan px-2 rounded-xl font-bold text-[15px] text-white">
                <p>FEATURED</p>
              </div>
            )}
          </div>

          <p className="font-bold">{job.position}</p>

          <p className="text-neutral-dg-cyan">{`${job.postedAt}  •  ${job.contract}  •  ${job.location}`}</p>

          <div className="border-neutral-dg-cyan border-t" />

          <div className="flex flex-wrap gap-4">
            {[job.role, job.level, ...job.languages, ...job.tools].map(
              (filter) => (
                <SetFilter key={filter} filter={filter} />
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default JobListing;
