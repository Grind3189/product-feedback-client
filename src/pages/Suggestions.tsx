import EmptySuggestions from "@components/suggestions/empty/EmptySuggestions";
import Header from "@components/suggestions/header/Header";
import SortSuggestions from "@components/suggestions/sort/SortSuggestions";
import SuggestionsList from "@components/suggestions/suggestionsList/SuggestionsList";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { makeRequest } from "utils/makeRequest";
import { SuggestionType } from "utils/types";

function Suggestions() {
  const [suggestions, setSuggestions] = useState<SuggestionType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("sort") ? searchParams.get("sort") : "";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const fromStorage = localStorage.getItem("userId");
      const parsedData = fromStorage ? JSON.parse(fromStorage) : "";
      try {
        const res = await makeRequest.post(
          query ? `/suggestions?sort=${query}` : "/suggestions",
          {
            userId: parsedData,
          },
        );
        localStorage.setItem(
          "userId",
          JSON.stringify(res.data.currentUser._id),
        );
        setSuggestions(res.data.suggestions);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className="gap-[1.875rem] xl:flex">
      <Header />
      <div className="xl:w-[825px]">
        <SortSuggestions />
        {!loading ? (
          <div className="max-md:px-6 max-md:py-8">
            {!suggestions.length ? (
              <EmptySuggestions />
            ) : (
              <SuggestionsList suggestions={suggestions} />
            )}
          </div>
        ) : (
          <h1 className="text-[2rem] font-bold text-light-navy-blue-#3A4374 m-8 md:m-0">
            Loading...
          </h1>
        )}
      </div>
    </div>
  );
}

export default Suggestions;
