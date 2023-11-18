import RoadmapColumn from "./RoadmapColumn";

const RoadmapList = () => {
  const roadmapList: string[] = ["Planned", "In-progress", "Live"];

  return (
    <section className="flex gap-[0.625rem] py-6 md:py-8 xl:py-12 max-md:px-6 xl:gap-[1.875rem]">
      {roadmapList.map((roadmap) => {
        return <RoadmapColumn key={roadmap} roadmap={roadmap} />;
      })}
    </section>
  );
};

export default RoadmapList;
