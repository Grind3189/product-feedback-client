import { SuggestionType } from "utils/types";
import RoadmapCard from "./RoadmapCard";

interface RoadmapColumnProp {
  roadmap: {
    status: string
    data: SuggestionType[]
  }
}

const RoadmapColumn = ({roadmap}: RoadmapColumnProp) => {
  return (
    <div className="flex-1">
      <div className="mb-6 xl:mb-8">
        <h1 className="text-[1.125rem] md:text-[0.875rem] font-bold tracking-[-0.194px] text-light-navy-blue-#3A4374 xl:text-[1.125rem] capitalize">
          {roadmap.status} ({roadmap.data.length})
        </h1>
        <span className="text-[0.8125rem] md:text-[0.875rem] text-dark-gray-#647196 xl:text-[1rem]">
          {roadmap.status === "planned"
            ? "Ideas prioritized for research"
            : roadmap.status === "in-progress"
              ? "Currently being developed"
              : "Released features"}
        </span>
      </div>

      <div className="flex flex-col gap-4 xl:gap-6">
        {roadmap?.data?.map((data: SuggestionType) => {
          return (
            <RoadmapCard roadmap={data} key={data._id} />
          )
        })}
   
      </div>
    </div>
  );
};

export default RoadmapColumn;
