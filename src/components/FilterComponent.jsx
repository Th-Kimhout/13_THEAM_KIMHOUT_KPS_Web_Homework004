import React from "react";

export default function FilterComponent({ getFilter }) {


  return (
    <form
      className="flex justify-between mx-4 mt-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="relative w-full ">
        <select
          onChange={(e) => getFilter(e.target.value)}
          id="filterLearningMaterials"
          name="filterLearningMaterials"
          className="block w-full p-4 text-sm text-gray-400 border-none focus:ring-custom-sky-blue focus:border-custom-sky-blue focus:outline-none rounded-xl bg-light-gray"
        >
          <option hidden value="">
            Sort By
          </option>
          <optgroup label="Sort By">
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </optgroup>
        </select>
      </div>
    </form>
  );
}
