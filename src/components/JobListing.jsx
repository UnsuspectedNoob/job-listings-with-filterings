import React from "react";
import SetFilter from "./SetFilter";

function JobListing({
  company,
  logo,
  neW,
  featured,
  position,
  postedAt,
  contract,
  location,
  filterArray,
}) {
  return (
    <div
      className={`relative flex flex-col gap-y-3 bg-white px-6 pb-6 border border-transparent ${
        neW && featured ? "border-l-[6px] border-l-primary-dsatd-cyan" : ""
      } rounded-md`}
    >
      {/* Mobile Header Image */}
      <div className="absolute w-12 h-12 -translate-y-1/2">
        <img src={logo} alt="profile icon" />
      </div>

      <div className="flex items-center mt-8">
        <div className="flex items-center mr-6 rounded-xl font-bold text-[16px] text-primary-dsatd-cyan self-end">
          <p>{company}</p>
        </div>

        {neW && (
          <div className="flex items-center bg-primary-dsatd-cyan mr-2 px-2 rounded-xl font-bold text-[15px] text-white">
            <p>NEW!</p>
          </div>
        )}

        {featured && (
          <div className="flex items-center bg-neutral-vdg-cyan px-2 rounded-xl font-bold text-[15px] text-white">
            <p>FEATURED</p>
          </div>
        )}
      </div>

      <p className="font-bold">{position}</p>

      <p className="text-neutral-dg-cyan">{`${postedAt}  •  ${contract}  •  ${location}`}</p>

      <div className="border-neutral-dg-cyan border-t" />

      <div className="flex flex-wrap gap-4">
        {filterArray &&
          filterArray.map((filter) => (
            <SetFilter key={filter} filter={filter} />
          ))}
      </div>
    </div>
  );
}

export default JobListing;
