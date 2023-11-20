import { Link, useSearchParams } from "react-router-dom";
import { SuggestionType } from "utils/types";

interface RoadmapFiltersProp {
  roadmaps: {
    status: string
    data: SuggestionType[]
  }[];
}

const RoadmapFilters = ({ roadmaps }: RoadmapFiltersProp) => {
  const colors: string[] = ["#F49F85", "#AD1FEA", "#62BCFA"];
  console.log(roadmaps)
  const [searchParams] = useSearchParams();
  const roadmapParams = searchParams.get("view") || "Planned";

  const getBorderColor = (index: number, filter: string) => {
    const style = {
      borderBottom:
        roadmapParams.toLowerCase() === filter ? `4px solid ${colors[index]}` : "none",
      opacity: roadmapParams.toLowerCase() === filter ? "1" : "0.4",
    };
    return style;
  };

  return (
    <section className="flex border-b md:hidden">
      {roadmaps?.map((roadmap, i) => {
        return (
          <Link
            to={`?view=${roadmap.status}`}
            className="flex-1 py-5 text-center text-[0.8125rem] font-bold tracking-[-0.181px] text-light-navy-blue-#3A4374 capitalize"
            key={roadmap.status}
            style={getBorderColor(i, roadmap.status)}
          >
            {roadmap.status} ({roadmap.data.length})
          </Link>
        );
      })}
    </section>
  );
};

export default RoadmapFilters;
