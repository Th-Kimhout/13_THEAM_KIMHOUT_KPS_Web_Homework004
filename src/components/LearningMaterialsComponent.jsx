import React, { useState } from "react";
import { Star } from "lucide-react";
import FilterComponent from "./FilterComponent";

export default function LearningMaterialsComponent({
  learningMaterials,
  handleClickLike,
  getFilter
}) {
  
  

  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh] no-scrollbar">
      {/* calling filter component */}
      <FilterComponent getFilter={getFilter}/>

      {/* title */}
      <div className="flex items-center justify-between p-4">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* materials list */}
      <div className="space-y-3">
        {learningMaterials.map(({ id, image, title, postedAt, isFavorite }) => (
          <div
            className="flex items-center gap-5 px-4 py-2 bg-light-gray"
            key={id}
          >
            <img
              src={image}
              alt={title}
              width={50}
              height={50}
              className="rounded-xl"
            />

            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-base font-medium">{title}</p>
                <Star
                  size={20}
                  fill={isFavorite ? "#FAA300" : "none"}
                  stroke={isFavorite ? "none" : "black"}
                  onClick={() => handleClickLike(id)}
                />
              </div>
              <p className="text-sm text-gray-400">Posted at: {postedAt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
