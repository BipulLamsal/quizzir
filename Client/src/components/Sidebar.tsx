import { MdExplore, MdQuiz } from "react-icons/md";
import { PiNoteFill } from "react-icons/pi";
import { CgLivePhoto } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { AnimatePresence, motion, spring } from "framer-motion";

function Sidebar() {
  const [isActive, setIsActive] = useState(0);
  const handleOnClick = (index: number) => {
    setIsActive(index);
  };
  const { isToggled } = useContext(SidebarContext);
  console.log(isToggled);
  const sideBarNavItems = [
    {
      id: 0,
      display: "Feed",
      icon: <MdExplore className="w-1/8 text-2xl"></MdExplore>,
      to: "/",
    },
    {
      id: 1,
      display: "Quiz",
      icon: <MdQuiz className="w-1/8 text-2xl"></MdQuiz>,
      to: "/quiz",
    },
    {
      id: 2,
      display: "Flash Card",
      icon: <PiNoteFill className="w-1/8 text-2xl"></PiNoteFill>,
      to: "/flashcard",
    },
    {
      id: 3,
      display: "Quiz Hunt",
      icon: <CgLivePhoto className="w-1/8 text-2xl"></CgLivePhoto>,
      to: "/quizhunt",
    },
  ];

  return (
    <motion.div
      className={`bg-purple-500 text-white h-screen transition-width duration-300 px-12 py-2`}
      initial={{ 
        width: "300px" }}
      animate={{ width: !isToggled ? "300px" : "160px" }}
      transition={{ duration: 0.1 }}
    >
      <ul className="mt-4 flex flex-col">
        {sideBarNavItems.map((item) => {
          return (
            <Link
              to={item.to}
              onClick={() => {
                handleOnClick(item.id);
              }}
            >
              <li
                className={`mb-2 py-3 px-5 text-purple-100 hover:bg-purple-800 rounded-md hover:text-white ${
                  isActive === item.id && `bg-purple-800 text-white`
                }`}
              >
                <p className="flex flex-row items-center gap-5">
                  <p>{item.icon}</p>
                  {!isToggled && item.display}
                </p>
              </li>
            </Link>
          );
        })}
      </ul>
    </motion.div>
  );
}

export default Sidebar;
