import "./App.css";
import TopNavbarComponent from "./components/TopNavbarComponent";
import SidebarComponent from "./components/SidebarComponent";
import DashboardComponent from "./components/DashboardComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState("");
  const getSearchValue = (value) => {
    setFilter(value);
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
            <DashboardComponent />

            <div className="flex justify-between w-full pt-12">
              <AssignmentsComponent filter={filter} />
            </div>
          </section>

          <section className="w-1/4 pl-5">
            <LearningMaterialsComponent />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
