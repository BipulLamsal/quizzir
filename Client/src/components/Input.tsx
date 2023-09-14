import { ReactNode } from "react";
interface InputPropertyType {
  placeholder: string;
  icon: ReactNode;
}

function Input({ props }: { props: InputPropertyType }) {
  return (
    <div className="flex items-center space-x-4 relative ">
      <input
        type="text"
        className="bg-purple-600 border border-purple-200 rounded-full px-10 py-3 focus:outline-none focus:ring focus:border-purple-500 text-purple-100"
        placeholder={props.placeholder}
      />
      <button className="w-10 h-10 items-center justify-center flex bg-purple-800 hover:bg-purple-900 text-white font-semibold rounded-full transition duration-300 ease-in-out absolute right-2">
        {props.icon}
      </button>
    </div>
  );
}

export default Input;
