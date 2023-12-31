import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="md:flex md:justify-center md:py-14 h-fit min-h-screen md:w-[689px] md:mx-auto xl:w-auto">
      <Outlet />
    </div>
  );
};

export default Layout;
