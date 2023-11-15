import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="md:flex md:justify-center md:py-14 h-screen md:w-[689px] md:mx-auto">
      <Outlet />
    </div>
  );
};

export default Layout;
