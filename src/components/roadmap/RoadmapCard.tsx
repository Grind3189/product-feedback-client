import { Link, useLocation } from "react-router-dom";
import arrowUpIc from "@assets/shared/icon-arrow-up.svg";
import messageIc from "@assets/shared/icon-comments.svg";
import { SuggestionType } from "utils/types";

interface RoadmapCardProp {
  roadmap: SuggestionType;
}
const RoadmapCard = ({ roadmap }: RoadmapCardProp) => {
  const location = useLocation();
  const color =
    roadmap.status === "planned"
      ? "#F49F85"
      : roadmap.status === "live"
        ? "#62BCFA"
        : "#AD1FEA";

  return (
    <Link
      to={`/feedback/${roadmap._id}`}
      state={{ prevPath: location.pathname }}
      className={`rounded-[5px] border px-5 py-6 text-[0.8125rem] transition-all lg:hover:scale-105 lg:hover:shadow-md`}
      style={{borderTop: `6px solid ${color}`}}
    >
      <div className="mb-[0.875rem] flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <circle cx="4" cy="4" r="4" fill={color} />
        </svg>
        <span className="capitalize text-dark-gray-#647196 xl:text-[1rem]">
          {roadmap.status}
        </span>
      </div>

      <h2 className="mb-[0.5625rem] font-bold tracking-[-0.181px] text-light-navy-blue-#3A4374 xl:text-[1.125rem] xl:tracking-[-0.25px]">
        {roadmap.title}
      </h2>
      <p className="mb-6 text-dark-gray-#647196 xl:text-[1rem]">
        {roadmap.description}
      </p>
      <span className="mb-4 inline-block rounded-[10px] bg-gray-#F2F4FF px-4 py-[0.375rem] font-bold capitalize text-blue-#4661E6">
        {roadmap.category}
      </span>

      <div className="flex items-center justify-between">
        <button className="flex items-center gap-[0.625rem] rounded-[10px] bg-[#F2F4FE] px-3 py-[0.375rem] lg:hover:bg-[#CFD7FF] xl:py-[0.625rem]">
          <img src={arrowUpIc} alt="arrow up icon" />
          <span className="font-bold tracking-[-0.181px] text-light-navy-blue-#3A4374">
            {roadmap.upvotes}
          </span>
        </button>

        <div className="flex items-center gap-1 xl:gap-2">
          <img src={messageIc} alt="message icon" />
          <span className="font-bold tracking-[-0.181px] text-light-navy-blue-#3A4374 xl:text-[1rem]">
            {roadmap.comments.length}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RoadmapCard;
