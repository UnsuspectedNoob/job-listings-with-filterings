import React, { useContext } from "react";
import { iconRemove } from "../assets/images";
import { FilteringContext } from "../contexts/FilteringProvider";

function FilterTag({ name }) {
  const { filters, setFilters } = useContext(FilteringContext);
  return (
    <div className="flex items-center rounded-[4px] overflow-hidden">
      <p className="bg-neutral-lg-cyan-filter px-2 py-1 pb-px font-bold text-primary-dsatd-cyan">
        {name}
      </p>
      <div
        className="flex bg-primary-dsatd-cyan px-2 self-stretch"
        onClick={() => setFilters(filters.filter((filter) => filter !== name))}
      >
        <img className="self-center" src={iconRemove} alt="remove icon" />
      </div>
    </div>
  );
}

export default FilterTag;
