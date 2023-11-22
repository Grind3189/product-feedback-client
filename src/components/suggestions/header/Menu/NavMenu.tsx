import Categories from "./Categories";
import Roadmap from "./Roadmap";

interface NavMenuProp {
  isMenuOpen: boolean;
  toggleMenu: () => void;

}

const NavMenu = ({ isMenuOpen, toggleMenu }: NavMenuProp) => {
  return (
    <div
      className={`relative h-[calc(100vh-72px)] w-full overflow-hidden transition-all max-md:bg-black/50
        md:h-auto md:w-auto
        ${
          isMenuOpen
            ? "visible opacity-100"
            : "max-md:invisible max-md:opacity-0"
        }`}
      onClick={toggleMenu}
    >
      <div
        className={`right-0 flex h-full w-[271px] flex-col items-center gap-6 bg-light-gray-#F7F8FD p-6 transition-all max-md:absolute
          md:w-auto md:flex-row md:gap-[10px] md:bg-none md:p-0
          xl:flex-col xl:gap-6
           ${
             isMenuOpen
               ? "visible translate-x-0 opacity-100"
               : "max-md:invisible max-md:translate-x-[50%] max-md:opacity-0"
           }`}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <Categories toggleMenu={toggleMenu} />
        <Roadmap />
      </div>
    </div>
  );
};

export default NavMenu;
