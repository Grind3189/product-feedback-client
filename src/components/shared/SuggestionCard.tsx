import { Link, useLocation } from "react-router-dom";
import arrowUpIc from "@assets/shared/icon-arrow-up.svg";
import commentIc from "@assets/shared/icon-comments.svg";

const SuggestionCard = () => {
  const location = useLocation();
  return (
    <Link
      to="/feedback/123"
      state={{
        prevPath: location.search
          ? location.pathname + location.search
          : location.pathname,
      }}
      className="grid grid-cols-2 gap-y-4 rounded-[10px] bg-white p-6 md:w-full md:grid-cols-[50px_auto_auto] md:gap-x-10 md:gap-y-0"
    >
      <div className="col-start-1 col-end-[-1] flex flex-col gap-2 md:col-start-2 md:col-end-[-2] md:row-span-2">
        <h1 className="text-[1.125rem] font-bold tracking-[-0.25px] text-light-navy-blue-#3A4374">
          Add tags for solutions
        </h1>
        <p className="text-dark-gray-#647196">
          Easier to search for solutions based on a specific stack.
        </p>
        <span className="w-fit rounded-[10px] bg-gray-#F2F4FF px-4 py-[0.375rem] text-[0.8125rem] font-semibold text-blue-#4661E6">
          Enhancement
        </span>
      </div>

      <button className="row-start-2 flex h-fit w-fit items-center gap-[0.625rem] overflow-hidden rounded-[10px] bg-[#F2F4FE] px-4 py-[0.375rem] md:row-start-1 md:flex-col md:px-[0.5625rem] md:py-2">
        <img src={arrowUpIc} alt="arrow up icon" />
        <span className="max-w-[36px] overflow-hidden text-ellipsis text-[0.8125rem] font-bold tracking-[-0.181px] text-light-navy-blue-#3A4374">
          122
        </span>
      </button>

      <div className="col-start-2 row-start-2 flex items-center justify-end gap-1 md:col-start-[-2] md:row-span-2 md:gap-2">
        <img src={commentIc} alt="message icon" />
        <span className="text-[0.8125rem] font-bold tracking-[-0.181px] text-light-navy-blue-#3A4374 md:text-[1rem]">
          2
        </span>
      </div>
    </Link>
  );
};

export default SuggestionCard;
