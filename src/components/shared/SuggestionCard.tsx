import { Link, useLocation } from "react-router-dom";
import arrowUpIc from "@assets/shared/icon-arrow-up.svg";
import arrowUpIcWhite from "@assets/shared/icon-arrow-up-white.svg";
import commentIc from "@assets/shared/icon-comments.svg";
import { SuggestionType } from "utils/types";

interface SuggestionCardProp {
  suggestion: SuggestionType;
  handleClick: (suggestionId: string) => void;
  type: "list" | "view"
}

const SuggestionCard = ({ suggestion, handleClick, type }: SuggestionCardProp) => {
  const location = useLocation();

  const stopPropogation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    handleClick(suggestion._id)
  }

  return (
    <Link
      to={`/feedback/${suggestion?._id}`}
      state={{
        prevPath: location.search
          ? location.pathname + location.search
          : location.pathname,
      }}
      className={`grid w-full grid-cols-2 gap-y-4 rounded-[10px] bg-white p-6 transition-all md:w-full md:grid-cols-[50px_auto_auto] md:gap-x-10 md:gap-y-0 ${type === "list" ? "cursor-pointer" : "cursor-default"} ${
        location.pathname === "/" && "lg:hover:shadow-md"
      } `}
    >
      <div className="col-start-1 col-end-[-1] flex flex-col gap-2 md:col-start-2 md:col-end-[-2] md:row-span-2">
        <h1 className="text-[1.125rem] font-bold tracking-[-0.25px] text-light-navy-blue-#3A4374">
          {suggestion?.title}
        </h1>
        <p className="text-dark-gray-#647196">{suggestion?.description}</p>
        <span className="w-fit rounded-[10px] bg-gray-#F2F4FF px-4 py-[0.375rem] text-[0.8125rem] font-semibold capitalize text-blue-#4661E6">
          {suggestion?.category}
        </span>
      </div>

      <button
        className={`row-start-2 flex h-fit w-fit items-center gap-[0.625rem] overflow-hidden rounded-[10px] px-4 py-[0.375rem] md:row-start-1 md:flex-col md:px-[0.5625rem] md:py-2 ${
          suggestion.isLiked
            ? "bg-blue-#4661E6 text-white"
            : "bg-[#F2F4FE] text-light-navy-blue-#3A4374"
        } lg:hover:bg-[#CFD7FF]`}
        onClick={stopPropogation}
      >
        <img src={suggestion.isLiked ? arrowUpIcWhite : arrowUpIc} alt="arrow up icon" />
        <span className="max-w-[36px] overflow-hidden text-ellipsis text-[0.8125rem] font-bold tracking-[-0.181px]">
          {suggestion?.upvotes}
        </span>
      </button>

      <div className="col-start-2 row-start-2 flex items-center justify-end gap-1 md:col-start-[-2] md:row-span-2 md:gap-2">
        <img src={commentIc} alt="message icon" />
        <span className="text-[0.8125rem] font-bold tracking-[-0.181px] text-light-navy-blue-#3A4374 md:text-[1rem]">
          {suggestion?.comments?.length}
        </span>
      </div>
    </Link>
  );
};

export default SuggestionCard;
