import EmptySuggestions from "../components/suggestions/empty/EmptySuggestions";
import Header from "../components/suggestions/header/Header";
import SortSuggestions from "../components/suggestions/sort/SortSuggestions";
import SuggestionsList from "../components/suggestions/suggestionsList/SuggestionsList";

function Suggestions() {
  return (
    <div className="gap-[1.875rem] xl:flex">
      <Header />
      <div className="xl:w-[825px]">
        <SortSuggestions />
        <div className="max-md:px-6 max-md:py-8">
          <EmptySuggestions />
          {/* <SuggestionsList /> */}
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
