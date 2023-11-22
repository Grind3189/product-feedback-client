import suggestionIc from "@assets/suggestions/icon-suggestions.svg";
import CustomButton from "../../shared/CustomButton";
import Sort from "./Sort";
import { Link, useLocation } from "react-router-dom";

interface SortSuggestionsProp {
  suggestionsCount: number;
}

const SortSuggestions = ({ suggestionsCount }: SortSuggestionsProp) => {
  const location = useLocation();
  return (
    <section className="flex h-[56px] items-center gap-[38px] bg-navy-blue-#373F68 px-[1.125rem] text-white md:mb-6 md:h-[72px] md:rounded-[10px]">
      <div className="flex items-center gap-4 max-md:hidden">
        <img src={suggestionIc} alt="bulb icon" />
        <h1 className="text-[1.125rem] font-bold tracking-[-0.25px]">
          {suggestionsCount} Suggestions
        </h1>
      </div>

      <Sort />

      <Link
        to="/feedback/create"
        className="ml-auto"
        state={{
          prevPath: location.search
            ? location.pathname + location.search
            : location.pathname
        }}
      >
        <CustomButton bgColor="purple">+ Add Feedback</CustomButton>
      </Link>
    </section>
  );
};

export default SortSuggestions;
