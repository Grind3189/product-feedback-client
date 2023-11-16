import Categories from "./Categories";
import Roadmap from "./Roadmap";

interface NavMenuProp {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const NavMenu = ({ isMenuOpen, toggleMenu }: NavMenuProp) => {
  return (
    <div
      className={`relative h-[calc(100vh-72px)] w-full max-md:bg-black/50 overflow-hidden transition-all
        md:h-auto md:w-auto
        ${isMenuOpen ? "visible opacity-100" : "max-md:invisible max-md:opacity-0"}`}
      onClick={toggleMenu}
    >
      <div
        className={`bg-light-gray-#F7F8FD right-0 flex h-full w-[271px] flex-col items-center gap-6 p-6 transition-all max-md:absolute
          md:flex-row md:w-auto md:bg-none md:p-0 md:gap-[10px]
          xl:flex-col xl:gap-6
           ${
             isMenuOpen
               ? "visible translate-x-0 opacity-100"
               : "max-md:invisible max-md:translate-x-[50%] max-md:opacity-0"
           }`}
        onClick={(e: React.MouseEvent) => e.stopPropagation}
      >
        <Categories />
        <Roadmap />
      </div>
    </div>
  );
};

export default NavMenu;
