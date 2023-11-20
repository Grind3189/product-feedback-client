import SuggestionCard from "../../shared/SuggestionCard";
import { SuggestionType } from "utils/types";
import { makeRequest } from "utils/makeRequest";

interface SuggestionsListProp {
  suggestions: SuggestionType[];
  updateSuggestion: (updatedSuggestions: SuggestionType) => void;
}

const SuggestionsList = ({
  suggestions,
  updateSuggestion,
}: SuggestionsListProp) => {

  const handleLike = async (suggestionId: string) => {
    try {
      const fromStorage = localStorage.getItem("userId");
      const parsedData = fromStorage ? JSON.parse(fromStorage) : "";
      const res = await makeRequest.post(`/suggestion/like/${suggestionId}`, {
        userId: parsedData,
      });
      updateSuggestion(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {suggestions.length &&
        suggestions.map((suggestion) => {
          return (
            <SuggestionCard
              key={suggestion._id}
              suggestion={suggestion}
              handleClick={handleLike}
              type="list"
            />
          );
        })}
    </div>
  );
};

export default SuggestionsList;
