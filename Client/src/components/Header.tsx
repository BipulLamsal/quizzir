import {HiMenuAlt3} from 'react-icons/hi'
import Logo from "../assets/icons/quizzir_logo.svg";
function Header() {
  return (
    <nav className="p-4 bg-purple-500 flex justify-between items-center">
    <div className="flex items-center">
      <span className="ml-2 text-white">
        <img src={Logo} alt='quizzir logo'></img>
      </span>
      <p className='text-xl font-bold text-white'>
        Quizzir
      </p>
      <button className="text-white">
      <HiMenuAlt3></HiMenuAlt3>
      </button>
    </div>

    {/* Button (on the right) */}
    <button className="bg-green-500 text-white px-4 py-2 rounded">
      Get Started
    </button>
  </nav>
  )
}

export default Header