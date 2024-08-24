import React from "react";

function SetFilter({ filter }) {
  return (
    <div className="bg-neutral-lg-cyan-filter px-2 py-1 rounded-md font-bold text-primary-dsatd-cyan">
      {filter}
    </div>
  );
}

export default SetFilter;
