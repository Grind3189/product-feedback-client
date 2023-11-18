import { Link, useLocation } from "react-router-dom";
import MenuCard from "./MenuCard";

const Roadmap = () => {
  const roadmapLists: string[] = ["Planned", "In-Progress", "Live"];
  const svgColors: string[] = ["#F49F85", "#AD1FEA", "#62BCFA"];
  const location = useLocation()

  return (
    <MenuCard>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[1.125rem] font-bold tracking-[0.25px] text-light-navy-blue-#3A4374">Roadmap</h1>
        <Link to="/roadmap" state={{prevPath: location.search ? location.pathname + location.search : location.pathname}} className="text-[0.8125rem] font-semibold underline text-blue-#4661E6">View</Link>
      </div>

      <div className="flex flex-col gap-2">
        {roadmapLists.map((roadmap, index) => {
          return (
            <div className="flex items-center gap-4 text-dark-gray-#647196" key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
              >
                <circle cx="4" cy="4" r="4" fill={svgColors[index]} />
              </svg>
              <span>{roadmap}</span>
              <span className="ml-auto font-bold">2</span>
            </div>
          );
        })}
      </div>
    </MenuCard>
  );
};

export default Roadmap;
