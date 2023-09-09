import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  return (
    <>
    <Header></Header>
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
