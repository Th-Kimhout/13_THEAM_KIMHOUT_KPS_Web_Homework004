import "./App.css";
import TopNavbarComponent from "./components/TopNavbarComponent";
import SidebarComponent from "./components/SidebarComponent";
import DashboardComponent from "./components/DashboardComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import CardComponent from "./components/CardComponent";
import { dashboard } from "./data/dashboard";
import { learningMaterials } from "./data/learningMaterials";
import { useState } from "react";
import { project } from "./data/project";
function App() {
  const [learningMaterialsState, setLearningMaterialsState] =
    useState(learningMaterials);
  const [projectData, setProjectData] = useState(project);
  const [filterProject, setfilterProject] = useState(project);

  const handleAddProject = (project) => {
    setProjectData([...projectData, project]);
    setfilterProject([...projectData, project]);
  };

  const getSearchValue = (value) => {
    if (value) {
      const filteredData = projectData.filter((project) =>
        project.projectName.toLowerCase().includes(value.toLowerCase())
      );
      setfilterProject(filteredData);
    } else {
      setfilterProject(projectData);
    }
  };

  const getFilter = (filter) => {
    setLearningMaterialsState((prevData) => {
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

  const handleClickLike = (id) => {
    setLearningMaterialsState((prevState) =>
      prevState.map((material) =>
        material.id === id
          ? { ...material, isFavorite: !material.isFavorite }
          : material
      )
    );
  };

  return (
    <div className="flex ">
      <div className="w-1/5">
        <SidebarComponent />
      </div>
      <div className="flex flex-col w-full h-[100%] px-8">
        <div className="w-full py-4">
          <TopNavbarComponent getSearchValue={getSearchValue} />
        </div>
        <div className="flex">
          <section className="flex flex-col w-3/4">
            <DashboardComponent dashboard={dashboard} />
            <div className="flex justify-between w-full pt-12">
              <AssignmentsComponent />
              <AddNewProjectComponent handleAddProject={handleAddProject} />
            </div>
            <div className="flex flex-wrap w-full gap-4">
              <CardComponent projectData={filterProject} />
            </div>
          </section>
          <section className="w-1/4 pl-5">
            <LearningMaterialsComponent
              learningMaterials={learningMaterialsState}
              handleClickLike={handleClickLike}
              getFilter={getFilter}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
