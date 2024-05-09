import { Lang, NavItems } from "../Constants/Constants";
import Logo from "/Nav/Logo.svg";
import NavbarRes from "./NavbarRes";
import Ham from "/Icons/ham.svg"
import Right from "/Icons/Right.svg"
import { useState } from "react";
const Navbar = () => {
   const [show, isShow] = useState(false)
  return (
    <div className="max-w-[1500px] h-full w-full max-lg:px-10 py-6 flex items-center justify-between">
      <div id="logo" className="w-1/2">
        <a href="#">
          <img src={Logo} alt="" />
        </a>
      </div>
      <ul id="navItems" className="flex items-center w-full gap-12 max-lg:hidden">
        {NavItems.map((item, index) => {
          return (
            <li
              key={index}
              className="text-[#314584] hover:underline duration-100 font-semibold hover:font-bold transition-all"
            >
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
      <div
        id="LangCont"
        className="flex items-center justify-center w-full h-full gap-5 max-md:hidden max-lg:justify-start"
      >
        <select
          name="lang"
          className="mb-1 hover:cursor-pointer rounded text-[#314584] font-semibold outline-none focus:outline-none"
          id="lang"
        >
          {Lang.map((lang, index) => {
            return (
              <option key={index} className="text-[#314584]" value={lang.name}>
                {lang.value.toUpperCase()}
              </option>
            );
          })}
        </select>
        <button className="px-4 py-2 flex items-center duration-150 gap-4 rounded shadow-lg hover:scale-[1.01] text-[#FF3946] mb-2 font-semibold hover:shadow-black/40 shadow-black/20 ">
          Contact Us <img src={Right} className="w-5 h-5" alt="" />
        </button>
      </div>
          <div className="flex items-center justify-center"><img src={Ham} className="w-16 h-10 cursor-pointer lg:hidden" onClick={()=>isShow(true)} alt="" /></div>

          {show &&  <NavbarRes isShow={isShow} Logo={Logo} NavItems={NavItems} Lang={Lang}/>}

    </div>
  );
};

export default Navbar;
