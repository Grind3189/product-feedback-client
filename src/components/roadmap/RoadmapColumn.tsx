import RoadmapCard from "./RoadmapCard";

interface RoadmapColumnProp {
  roadmap: string;
}

const RoadmapColumn = ({ roadmap }: RoadmapColumnProp) => {
  return (
    <div className="flex-1">
      <div className="mb-6 xl:mb-8">
        <h1 className="text-[1.125rem] md:text-[0.875rem] font-bold tracking-[-0.194px] text-light-navy-blue-#3A4374 xl:text-[1.125rem]">
          {roadmap} (2)
        </h1>
        <span className="text-[0.8125rem] md:text-[0.875rem] text-dark-gray-#647196 xl:text-[1rem]">
          {roadmap === "Planned"
            ? "Ideas prioritized for research"
            : roadmap === "In-Progess"
              ? "Currently being developed"
              : "Released features"}
        </span>
      </div>

      <div className="flex flex-col gap-4 xl:gap-6">
        <RoadmapCard roadmap={roadmap} />
        <RoadmapCard roadmap={roadmap} />
        <RoadmapCard roadmap={roadmap} />
      </div>
    </div>
  );
};

export default RoadmapColumn;
