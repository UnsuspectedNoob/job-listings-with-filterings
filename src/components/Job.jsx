import React from "react";
import SetFilter from "./SetFilter";

function Job({ job }) {
  return (
    <div
      className={`relative flex md:justify-between flex-col md:items-center md:flex-row gap-y-3 bg-white px-6 xl:px-10 pb-6 md:py-8 border border-transparent ${
        job.new && job.featured && "border-l-[6px] border-l-primary-dsatd-cyan"
      } rounded-md shadow-xl`}
    >
      <div className="md:flex">
        <div className="absolute md:hidden w-12 h-12 -translate-y-1/2">
          <img src={job.logo} alt={`Company logo for ${job.company}`} />
        </div>

        <div className="flex items-center md:gap-x-6">
          <div className="md:block hidden">
            <img src={job.logo} alt={`Company logo for ${job.company}`} />
          </div>

          <div className="flex flex-col gap-y-3 md:gap-y-2 mt-8 md:mt-0">
            <div className="flex">
              <div className="flex items-center mr-6 rounded-xl font-bold text-[16px] text-primary-dsatd-cyan self-end">
                <p>{job.company}</p>
              </div>
              <div className="flex flex-wrap">
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
            </div>

            <p className="font-bold md:text-2xl hover:text-primary-dsatd-cyan cursor-pointer">
              {job.position}
            </p>

            <p className="text-neutral-dg-cyan">{`${job.postedAt}  •  ${job.contract}  •  ${job.location}`}</p>
          </div>
        </div>
      </div>

      <div className="border-neutral-dg-cyan md:hidden border-t" />

      <div className="flex flex-wrap items-center gap-4">
        {[job.role, job.level, ...job.languages, ...job.tools].map((filter) => (
          <SetFilter key={filter} filter={filter} />
        ))}
      </div>
    </div>
  );
}

export default Job;
