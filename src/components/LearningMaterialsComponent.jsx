import React, { useState } from "react";
import { Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import { learningMaterials } from "../data/learningMaterials";

export default function LearningMaterialsComponent() {
  const [learningMaterialsData, setLearningMaterialsData] =
    useState(learningMaterials);

  const getFilter = (filter) => {
    setLearningMaterialsData((prevData) => {
      const sortData = [...prevData].sort((a, b) => {
        if (filter === "A-Z") {
          return a.title.localeCompare(b.title); // Sort in ascending order
        } else if (filter === "Z-A") {
          return b.title.localeCompare(a.title); // Sort in descending order
        }
      });
      return sortData;
    });
  };

  const handleisFavorite = (id) => {
    setLearningMaterialsData((prevState) =>
      prevState.map((material) =>
        material.id === id
          ? { ...material, isFavorite: !material.isFavorite }
          : material
      )
    );
  };

  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh] no-scrollbar">
      {/* calling filter component */}
      <FilterComponent getFilter={getFilter} />

      {/* title */}
      <div className="flex items-center justify-between p-4">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* materials list */}
      <div className="space-y-3">
        {learningMaterialsData.map(
          ({ id, image, title, postedAt, isFavorite }) => (
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
                    onClick={() => handleisFavorite(id)}
                  />
                </div>
                <p className="text-sm text-gray-400">Posted at: {postedAt}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
