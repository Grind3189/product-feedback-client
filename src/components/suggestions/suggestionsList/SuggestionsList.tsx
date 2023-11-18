import { useEffect, useState } from "react";
import { makeRequest } from "utils/makeRequest";
import SuggestionCard from "../../shared/SuggestionCard";
import { SuggestionType } from "utils/types";
import { useSearchParams } from "react-router-dom";



const SuggestionsList = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("sort") ? searchParams.get("sort") : "" 
  const [suggestions, setSuggestions] = useState<SuggestionType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const fromStorage = localStorage.getItem("userId");
      const parsedData = fromStorage ? JSON.parse(fromStorage) : "";
      try {
        const res = await makeRequest.post(query ? `/suggestions?sort=${query}` : "/suggestions", {
          userId: parsedData,
        });
        localStorage.setItem(
          "userId",
          JSON.stringify(res.data.currentUser._id),
        );
        setSuggestions(res.data.suggestions)
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [query]);

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
