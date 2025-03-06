import { EllipsisVertical } from "lucide-react";
import React from "react";

export default function CardComponent({ projectData }) {
  const statusBar = (progress) => {
    if (progress == 25) {
      return "bg-custom-pink w-1/4";
    } else if (progress == 50) {
      return "bg-custom-yellow-500 w-2/4";
    } else if (progress == 75) {
      return "bg-custom-carrot w-3/4";
    } else if (progress == 100) {
      return "bg-custom-sky-blue w-full";
    }
  };

  const statusColor = (progress) => {
    if (progress == 25) {
      return "text-custom-pink";
    } else if (progress == 50) {
      return "text-yellow-500 ";
    } else if (progress == 75) {
      return "text-custom-carrot";
    } else if (progress == 100) {
      return "text-custom-sky-blue";
    }
  };

  const getDaysLeft = (dueDate) => {
    const currentDate = new Date(new Date().toLocaleDateString());
    const projectDueDate = new Date(dueDate);

    let differentTime = projectDueDate.getTime() - currentDate.getTime();
    let daysLeft = differentTime / (1000 * 3600 * 24);
    if (daysLeft >= 7) {
      if (Math.round(daysLeft / 7) === 1) return "1 week left";
      else return Math.round(daysLeft / 7) + " weeks left";
    } else {
      if (Math.round(daysLeft) === 1) return "1 day left";
      return Math.round(daysLeft) + " days left";
    }
  };

  return (
    <div className="grid grid-cols-3 w-full place-content-between pt-8 overflow-auto  gap-4 h-[50vh] no-scrollbar">
      {projectData.map(
        ({ projectName, dueDate, progress, description }, index) => (
          <div
            className="w-full p-6 bg-white shadow-sm rounded-2xl"
            key={index}
          >
            <div className="flex justify-between mb-5">
              {/* date */}
              <p className={` font-medium ${statusColor(progress)}`}>
                {dueDate}
              </p>
              <EllipsisVertical size={20} color="#374957" />
            </div>

            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 capitalize">
              {projectName}
            </h5>
            <p className="mb-3 font-normal text-justify text-gray-400 line-clamp-2 ">
              {description ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor alias aut modi sunt minus repudiandae enim, non reprehenderit ipsam officiis magnam impedit omnis fuga cumque voluptatum, sapiente excepturi molestias eos."}
            </p>

            {/* progress bar */}
            <div className="flex justify-between w-full mb-1 font-medium ">
              <p>Progress</p>
              <p>{progress || "0"}%</p>
            </div>

            <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 ">
              <div
                className={`h-2.5 rounded-full  ${statusBar(progress)}`}
              ></div>
            </div>

            {/* deadline */}
            <div className="flex justify-end">
              <p className="px-4 py-2.5 text-sm font-medium text-center rounded-lg bg-light-gray max-w-28">
                {getDaysLeft(dueDate)}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
}
