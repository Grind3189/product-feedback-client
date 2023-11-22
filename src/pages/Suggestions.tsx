import EmptySuggestions from "@components/suggestions/empty/EmptySuggestions";
import Header from "@components/suggestions/header/Header";
import SortSuggestions from "@components/suggestions/sort/SortSuggestions";
import SuggestionsList from "@components/suggestions/suggestionsList/SuggestionsList";
import { UserContext } from "context/UserContext";
import { useEffect, useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { makeRequest } from "utils/makeRequest";
import { SuggestionType } from "utils/types";

function Suggestions() {
  const [suggestions, setSuggestions] = useState<SuggestionType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const {setUser} = useContext(UserContext)
  const query = searchParams.toString() || "";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await makeRequest.get(
          `/suggestion/getAll${query && "?" + query}`
          );
          setSuggestions(res.data.suggestions);
          setUser(res.data.currentUser)
          localStorage.setItem("user", JSON.stringify(res.data.currentUser))
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  const handleUpdateSuggestion = (updatedSuggestion: SuggestionType) => {
    const tempSuggestions = suggestions;
    setSuggestions(
      tempSuggestions.map((suggestion) => {
        if (suggestion._id === updatedSuggestion._id) {
          return updatedSuggestion;
        } else return suggestion;
      }),
    );
  };

  return (
    <div className="gap-[1.875rem] xl:flex">
      <Header />
      <div className="xl:w-[825px]">
        <SortSuggestions suggestionsCount={suggestions?.length} />
        {!loading ? (
          <div className="max-md:px-6 max-md:py-8">
            {!suggestions.length ? (
              <EmptySuggestions />
            ) : (
              <SuggestionsList
                suggestions={suggestions}
                updateSuggestion={handleUpdateSuggestion}
              />
            )}
          </div>
        ) : (
          <h1 className="m-8 text-[2rem] font-bold text-light-navy-blue-#3A4374 md:m-0">
            Loading...
          </h1>
        )}
      </div>
    </div>
  );
}

export default Suggestions;
