import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
     <div className="flex">
      <Sidebar></Sidebar>
      <main className="flex-1 p-4"> 
      <Outlet></Outlet>
      </main>
    </div>
    </>
  );
}

export default App;
