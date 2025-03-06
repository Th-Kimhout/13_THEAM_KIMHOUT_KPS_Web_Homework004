import { Outlet } from "react-router-dom";
import SidebarComponent from "./SidebarComponent";
import TopNavbarComponent from "./TopNavbarComponent";

import React from "react";

function RootLayout() {
  return (
    <>
      <div className="flex flex-col">
        {" "}
        <aside>
          <SidebarComponent />
        </aside>
        <SidebarComponent />
        <TopNavbarComponent />
      </div>
      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default RootLayout;
