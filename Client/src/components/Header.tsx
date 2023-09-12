import {HiMenuAlt3} from 'react-icons/hi'
import Logo from "../assets/icons/quizzir_logo.svg";
import HeaderButtons from './HeaderButtons';
import { useContext } from 'react';
import { SidebarContext } from '../context/SidebarContext';
function Header() {
  const {isToggled,setIsToggled} = useContext(SidebarContext);

  const handleOnToggle = () =>{
    setIsToggled(!isToggled);
  } 
  
  return (
    <nav className="p-4 px-10 bg-purple-500 flex justify-between items-center">
    <div className="flex items-center">
      <span className="ml-2 text-white">
        <img src={Logo} alt='quizzir logo'></img>
      </span>
      <p className='text-xl font-bold text-white'>
        Quizzir
      </p>
      <button className="text-white ml-20 text-2xl cursor-pointer" onClick={handleOnToggle}>
      <HiMenuAlt3></HiMenuAlt3>
      </button>
    </div>

    <div className='flex gap-5'>
    <HeaderButtons></HeaderButtons> 
    </div>

  </nav>
  )
}

export default Header