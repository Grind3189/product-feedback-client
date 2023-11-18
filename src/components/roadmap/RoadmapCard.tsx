import { Link } from "react-router-dom";
import arrowUpIc from "@assets/shared/icon-arrow-up.svg";
import messageIc from "@assets/shared/icon-comments.svg";

interface RoadmapCardProp {
  roadmap: string;
}
const RoadmapCard = ({ roadmap }: RoadmapCardProp) => {
  return (
    <Link to="" className="rounded-[5px] border px-5 py-6 text-[0.8125rem] border-t-[6px] border-t-[#F49F85]">
      <div className="mb-[0.875rem] flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <circle cx="4" cy="4" r="4" fill="#AD1FEA" />
        </svg>
        <span className="text-dark-gray-#647196 xl:text-[1rem]">{roadmap}</span>
      </div>
      
      <h2 className="mb-[0.5625rem] font-bold tracking-[-0.181px] text-light-navy-blue-#3A4374 xl:text-[1.125rem] xl:tracking-[-0.25px]">
        More comprehensive reports
      </h2>
      <p className="mb-6 text-dark-gray-#647196 xl:text-[1rem]">
        It would be great to see a more detailed breakdown of solutions.
      </p>
      <span className="mb-4 inline-block rounded-[10px] bg-gray-#F2F4FF px-4 py-[0.375rem] font-bold text-blue-#4661E6">
        Feature
      </span>

      <div className="flex items-center justify-between">
        <button className="flex items-center gap-[0.625rem] rounded-[10px] bg-[#F2F4FE] px-3 py-[0.375rem] xl:py-[0.625rem] lg:hover:bg-[#CFD7FF]">
          <img src={arrowUpIc} alt="arrow up icon" />
          <span className="font-bold tracking-[-0.181px] text-light-navy-blue-#3A4374">
            123
          </span>
        </button>

        <div className="flex items-center gap-1 xl:gap-2">
          <img src={messageIc} alt="message icon" />
          <span className="font-bold tracking-[-0.181px] text-light-navy-blue-#3A4374 xl:text-[1rem]">
            2
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RoadmapCard;
