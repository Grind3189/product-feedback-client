import RoadmapFilters from "@components/roadmap/RoadmapFilters";
import RoadmapHeader from "@components/roadmap/RoadmapHeader";
import RoadmapList from "@components/roadmap/RoadmapList";

function Roadmap() {
  return (
    <main className="md:px-[2.4375rem] md:py-14 xl:mx-auto xl:max-w-[1110px] xl:py-[4.875rem] xl:px-0">
      <RoadmapHeader />
      <RoadmapFilters />
      <RoadmapList />
    </main>
  );
}

export default Roadmap;
