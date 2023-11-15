import suggestionIc from "../../../assets/suggestions/icon-suggestions.svg";
import Sort from "./Sort";

const SortSuggestions = () => {
  return (
    <section className="bg-navy-blue-#373F68 flex h-[56px] items-center gap-[38px] px-[1.125rem] text-white md:h-[72px] md:rounded-[10px]">
      <div className="flex items-center gap-4 max-md:hidden">
        <img src={suggestionIc} alt="bulb icon" />
        <h1 className="text-[1.125rem] font-bold tracking-[-0.25px]">
          0 Suggestions
        </h1>
      </div>

      <Sort />

      <button className="bg-purple-#AD1FEA ml-auto rounded-[10px] px-4 py-[0.6563rem] text-[0.875rem] font-bold md:px-6 md:py-3">
        + Add Feedback
      </button>
    </section>
  );
};

export default SortSuggestions;
