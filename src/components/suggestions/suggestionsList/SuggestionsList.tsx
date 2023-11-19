import SuggestionCard from "../../shared/SuggestionCard";
import { SuggestionType } from "utils/types";

interface SuggestionsListProp {
  suggestions: SuggestionType[]
}

const SuggestionsList = ({suggestions}: SuggestionsListProp) => {

  return (
    <div className="flex flex-col items-center gap-4">
      {suggestions.length && suggestions.map(suggestion => {
        return (
          <SuggestionCard key={suggestion._id} suggestion={suggestion} />
        )
      })}
    </div>
  );
};

export default SuggestionsList;
