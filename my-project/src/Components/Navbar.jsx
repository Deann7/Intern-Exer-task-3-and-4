import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeLink = " bg-blue-100 text-black font-bold underline";
    const normalLink = "";
return (
    <div>
    <nav className="dark:bg-indigo-800 fixed w-full z-20 top-0 start-0 border-b border-cyan-400 dark:border-yellow-900 pt-1 pb-1">
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex flex-col p-8 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
        <li className='p-2'>
            <NavLink
              to="/Home"
              className= {({ isActive }) => (isActive ? activeLink : normalLink)}
           >
            <p className="border w-full text-lime-400">
            Home
            </p>
            </NavLink>
          </li>
          <li className='p-2'>
            <NavLink
              to="/AboutMe"
              className= {({ isActive }) => (isActive ? activeLink : normalLink)}
           >
            <p className="border w-full text-lime-400">
            About Me
            </p>
            </NavLink>
          </li>
          <li className='p-2'>
            <NavLink
              to="/ContactMe"
               className={({ isActive }) => (isActive ? activeLink : normalLink)}
            ><p className="border w-ful text-lime-400">
            Contact Me
            </p>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
    );

};

export default Navbar;
