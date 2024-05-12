import Cross from "/Icons/maki_cross.svg";
import PropTypes from "prop-types";
import Right from "/Icons/Right.svg"
import {AnimatePresence, motion} from "framer-motion"

const NavbarRes = ({ Logo, NavItems, Lang, isShow }) => {
  return (
    <AnimatePresence>
      
    <motion.div key={Logo}
    initial={{x:200, opacity:0.4}}
    animate={{x:0, opacity:1}}
    exit={{x:200, opacity:0.4}}
    transition={{duration:0.3}}
    className="absolute z-50 top-0 right-0 h-screen backdrop-blur-xl bg-slate-700/10 w-[30rem]">
      <div className="p-10">
        <div id="logo" className="grid w-full grid-cols-2 gap-10 pb-10 pr-10">
          <a href="#">
            <img src={Logo} alt="" />
          </a>
          <div className="flex justify-end">
          <img onClick={()=>isShow(false)} className="w-6 h-6 cursor-pointer" src={Cross} alt="" />
          </div>
        </div>
        <ul id="navItems" className="grid grid-cols-2 gap-y-10">
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
        <div id="LangCont" className="grid grid-cols-2 pt-10 md:hidden">
          <div className="flex items-center ">
            <select
              name="lang"
              className="mb-1 hover:cursor-pointer rounded text-[#314584] bg-transparent font-semibold outline-none focus:outline-none"
              id="lang"
            >
              {Lang.map((lang, index) => {
                return (
                  <option
                    key={index}
                    className="text-[#314584]"
                    value={lang.name}
                  >
                    {lang.value.toUpperCase()}
                  </option>
                );
              })}
            </select>
          </div>
          <button className="px-4 py-2 flex items-center duration-150 gap-4 rounded shadow-lg hover:scale-[1.01] text-[#FF3946] bg-white mb-2 font-semibold hover:shadow-black/40 shadow-black/20 ">
          Contact Us <img src={Right} className="w-5 h-5" alt="" />
        </button>
        </div>
      </div>
    </motion.div>
    
    </AnimatePresence>
  );
};
NavbarRes.propTypes = {
  Logo: PropTypes.string.isRequired,
  NavItems: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  Lang: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  isShow: PropTypes.func.isRequired, 
};
export default NavbarRes;
