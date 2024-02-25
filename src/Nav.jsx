import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { GiLoveHowl } from "react-icons/gi";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const links = [
    { id: 1, path: "home", text: "Home" },
    { id: 2, path: "about", text: "About Me" },
    { id: 3, path: "projects", text: "Projects" },
    { id: 4, path: "contact", text: "Contact" },
  ];
  return (
    
      <div className="flex justify-between items-center h-24 lg:px-28 lg:max-w-6xl md:max-w-2xl">
        <h1 className="pl-3 text-3xl font-bold lg:mx-2 md:mx-10">
          AVARTARR
        </h1>
        <div className="flex items-center p-5  lg:bg-[#31206fd7] md:bg-[#31206fd7] rounded-full">
          <ul className="hidden md:flex justify-center space-x-10">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                 to={link.path}
                 spy={true}
                smooth={true}
                duration={800}
                offset={-70}
                activeClass="active"
                className="scroll" 
                >{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div onClick={handleNav} className="block md:hidden p-6 ">
          {nav ? <GiLoveHowl size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 ease-in-out duration-500 lg:hidden bg-[#26125e]"
              : "fixed left-[-100%]"
          }
        >
          <div className="flex">
          <h1 className="text-3xl font-bold ml-1 my-4 py-4">
          AVARTARR 
        </h1>
        <div onClick={handleNav} className="block md:hidden py-10 pl-3" >
        <AiOutlineClose size={20} />
        </div>
          </div>
          <ul className="p-4 ">
            {links.map((link) => (
              <li key={link.id} className="link">
              <Link
               to={link.path}
               spy={true}
              smooth={true}
              duration={800}
              offset={-70}
              >{link.text}</Link>
            </li>
               
            ))}
          </ul>
        </div>
      </div>
    
  );
};

export default Nav;
