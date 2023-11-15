import Header from "../components/header/Header";
import SortSuggestions from "../components/sort/SortSuggestions";

function Suggestions() {
  return (
    <div className="gap-[1.875rem] xl:flex">
      <Header />
      <div className="xl:w-[825px]">
        <SortSuggestions />
      </div>
    </div>
  );
}

export default Suggestions;
