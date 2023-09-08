import { MdExplore, MdQuiz } from "react-icons/md";
import { PiNoteFill } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
function Sidebar() {
    // const sideBarNavItems = [
    //     {
    //         display: 'Feed',
    //         icon : <MdExplore></MdExplore>,
    //         to:'/'

    //     }
    // ]
  return (
    <div className="bg-purple-500 text-white w-1/4 h-screen px-12 py-2">
      <ul className="mt-4 flex flex-col">
        <li className="mb-2 py-3 px-5 text-purple-100 hover:bg-purple-800 rounded-md hover:text-white">
          <a href="#" className="flex flex-row items-center gap-5">
            <p>
              <MdExplore className="w-1/8 text-2xl"></MdExplore>
            </p>
            Feed
          </a>
        </li>
        <li className="mb-2 py-3 px-5 text-purple-100 hover:bg-purple-800 rounded-md hover:text-white">
          <a href="#" className="flex flex-row items-center gap-5">
            <p>
              <MdQuiz className="w-1/8 text-2xl"></MdQuiz>
            </p>
            Quiz
          </a>
        </li>
        <li className="mb-2 py-3 px-5 text-purple-100 hover:bg-purple-800 rounded-md hover:text-white">
          <a href="#" className="flex flex-row items-center gap-5">
            <PiNoteFill className="w-1/8 text-2xl"></PiNoteFill>
            Flash Card
          </a>
        </li>
        <li className="mb-2 py-3 px-5 text-purple-100 hover:bg-purple-800 rounded-md hover:text-white">
          <a href="#" className="flex items-center gap-5">
            <CgMediaLive className="w-1/8 text-2xl" />

            <div className="">Quiz Hunt</div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
