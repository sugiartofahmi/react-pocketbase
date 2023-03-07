import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <header className=" w-full sticky  text-white bg-[#2B2C43] ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <h1 className="flex font-bold text-2xl">
              TASK
              <span className="text-[#19C1F1]">U</span>
            </h1>
          </div>

          <GiHamburgerMenu
            onClick={() => setShow(!show)}
            size={20}
            className="  lg:hidden  "
          />

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <Link to="/">
              <h1 className="text-base font-medium  transition-all duration-200 hover:text-[#19C1F1] focus:text-[#19C1F1]">
                Home
              </h1>
            </Link>
            <Link to="/task">
              <h1 className="text-base font-medium  transition-all duration-200 hover:text-[#19C1F1] focus:text-[#19C1F1]">
                Task
              </h1>
            </Link>
            <Link to="/list">
              <h1 className="text-base font-medium  transition-all duration-200 hover:text-[#19C1F1] focus:text-[#19C1F1]">
                List
              </h1>
            </Link>
          </div>
        </nav>

        {show && (
          <nav className="pt-4 pb-6 bg-[#2B2C43]border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                <Link to="/">
                  <h1 className="inline-flex py-2 text-base font-medium  transition-all duration-200 hover:text-[#19C1F1] focus:text-[#19C1F1]">
                    Home
                  </h1>
                </Link>
                <Link to="/task">
                  <h1 className="inline-flex py-2 text-base font-medium  transition-all duration-200 hover:text-[#19C1F1] focus:text-[#19C1F1]">
                    Task
                  </h1>
                </Link>
                <Link to="/list">
                  <h1 className="inline-flex py-2 text-base font-medium  transition-all duration-200 hover:text-[#19C1F1] focus:text-[#19C1F1]">
                    List
                  </h1>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
