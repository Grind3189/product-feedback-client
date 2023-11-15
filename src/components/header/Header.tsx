import hamburgerIc from "../../assets/shared/mobile/icon-hamburger.svg";
import closeIc from "../../assets/shared/mobile/icon-close.svg";
import NavMenu from "./Menu/NavMenu";
import { useState } from "react";

const Header = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <header className="h-[72px] md:flex md:h-[176px] md:gap-[10px] md:mb-10 xl:flex-col xl:w-[255px] xl:h-auto xl:gap-6">
      <div className="flex h-full items-center justify-between bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 px-6 md:w-[223px] md:items-end md:rounded-[10px] md:py-6 xl:h-[137px] xl:w-full">
        <div className="text-white">
          <h1 className="text-[0.9375rem] font-bold tracking-[-0.187px] md:text-[1.25rem] md:tracking-[-0.25px]">
            Frontend Mentor
          </h1>
          <span className="text-[0.8125rem] font-medium opacity-75 md:text-[0.9375rem]">
            Feedback Board
          </span>
        </div>

        <button onClick={toggleNav} className="md:hidden">
          {!openNav ? (
            <img src={hamburgerIc} alt="hamburger icon" />
          ) : (
            <img src={closeIc} alt="cross icon" />
          )}
        </button>
      </div>

      <NavMenu isMenuOpen={openNav} toggleMenu={toggleNav} />
    </header>
  );
};

export default Header;
