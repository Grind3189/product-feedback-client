import { Link, useSearchParams } from "react-router-dom";

const RoadmapFilters = () => {
  const filterList: string[] = ["Planned", "In-Progess", "Live"];
  const colors: string[] = ["#F49F85", "#AD1FEA", "#62BCFA"];
  const [searchParams] = useSearchParams();
  const roadmapParams = searchParams.get("view") || "Planned";

  const getBorderColor = (index: number, filter: string) => {
    const style = {
      borderBottom:
        roadmapParams === filter ? `4px solid ${colors[index]}` : "none",
      opacity: roadmapParams === filter ? "1" : "0.4",
    };
    return style;
  };

  return (
    <section className="flex border-b md:hidden">
      {filterList.map((filter, i) => {
        return (
          <Link
            to={`?view=${filter}`}
            className="flex-1 py-5 text-center text-[0.8125rem] font-bold tracking-[-0.181px] text-light-navy-blue-#3A4374"
            key={filter}
            style={getBorderColor(i, filter)}
          >
            {filter} (2)
          </Link>
        );
      })}
    </section>
  );
};

export default RoadmapFilters;
