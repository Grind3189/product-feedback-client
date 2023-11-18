import CustomButton from "@components/shared/CustomButton";
import { Link, useLocation } from "react-router-dom";

const RoadmapHeader = () => {
    const location = useLocation()
  return (
    <header className="bg-navy-blue-#373F68 text-white py-[1.625rem] px-6 flex items-center justify-between md:rounded-[10px]">
      <div className="font-bold">
        <Link to="#" className="flex items-center gap-4">
          <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 9L2 5l4-4"
              stroke="#CDD2EE"
              stroke-width="2"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
          <span className="text-[0.8125rem] md:text-[0.875rem]">Go Back</span>
        </Link>
        <h1 className="text-[1.125rem] tracking-[-0.25pm] md:text-[1.5rem]">Roadmap</h1>
      </div>
      <Link to="/feedback/create" state={{prevPath: location.pathname}}>
        <CustomButton bgColor="purple">
            +Add Feedback
        </CustomButton>
      </Link>
    </header>
  );
};

export default RoadmapHeader;
