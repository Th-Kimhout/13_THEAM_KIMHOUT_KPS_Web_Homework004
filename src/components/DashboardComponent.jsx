import React from "react";

export default function DashboardComponent({ dashboard }) {
  return (
    <div>
      <h2 className="mb-5 text-xl font-semibold">Dashboard</h2>

      {/* display summary on each card */}

      <div className="flex justify-between gap-5">
        {dashboard.map(({ id, icon, totalTasks, label, color }) => (
          <div
            className="flex bg-white gap-5 py-3.5 px-4 rounded-xl w-auto flex-grow"
            key={id}
          >
            <div className={"p-3 rounded-xl " + color}>
              <img src={icon} alt="file icon" />
            </div>
            <div>
              <p className="text-xl font-bold">{totalTasks}</p>
              <p className="text-gray-400">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
