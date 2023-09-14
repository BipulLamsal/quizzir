import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { SidebarContextProvider } from "./context/SidebarContext";
function App() {
  return (
    <>
      <SidebarContextProvider>
        <Header></Header>
        <div className="flex flex-row w-full fixed">
          <Sidebar></Sidebar>
          <main className="w-full container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl ">
            <Outlet></Outlet>
          </main>
        </div>
      </SidebarContextProvider>
    </>
  );
}

export default App;
