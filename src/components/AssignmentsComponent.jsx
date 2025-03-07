import { React, useState } from "react";
import AddNewProjectComponent from "./AddNewProjectComponent";
import CardComponent from "./CardComponent";
import { assignment } from "../data/assignment";
export default function AssignmentsComponent({ filter }) {
  const [assignmentData, setAssignmentData] = useState(assignment);

  const handleAddNewAssignment = (project) => {
    setAssignmentData([...assignmentData, project]);
  };

  const filterData = (filter) => {
    if (filter) {
      const filteredData = assignmentData.filter((assignment) =>
        assignment.projectName.toLowerCase().includes(filter.toLowerCase())
      );
      return filteredData;
    } else {
      return assignmentData;
    }
  };

  const filteredData = filterData(filter);
  console.log(filteredData);
  
  return (
    <div className="w-full">
      <div className="flex justify-between w-full">
        {/* assignments  */}
        <h2 className="text-xl font-semibold">Assignments</h2>
        <AddNewProjectComponent
          handleAddNewAssignment={handleAddNewAssignment}
        />
      </div>

      <CardComponent assignment={filteredData} />
    </div>
  );
}
