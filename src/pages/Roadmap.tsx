import RoadmapFilters from "@components/roadmap/RoadmapFilters";
import RoadmapHeader from "@components/roadmap/RoadmapHeader";
import RoadmapList from "@components/roadmap/RoadmapList";
import useFetch from "hooks/useFetch";

function Roadmap() {
  const [roadmapData, loading] = useFetch("/roadmaps");

  return (
    <main className="md:px-[2.4375rem] md:py-14 xl:mx-auto xl:max-w-[1110px] xl:px-0 xl:py-[4.875rem]">
      <RoadmapHeader />
      {loading ? (
        <h1 className="m-8 text-[1.5rem] font-bold text-light-navy-blue-#3A4374 md:mx-0">
          Loading...
        </h1>
      ) : (
        <>
          <RoadmapFilters roadmaps={roadmapData} />
          <RoadmapList roadmapList={roadmapData} />
        </>
      )}
    </main>
  );
}

export default Roadmap;
