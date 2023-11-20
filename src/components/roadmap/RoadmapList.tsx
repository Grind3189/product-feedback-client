import { SuggestionType } from "utils/types";
import { useContext } from "react";
import RoadmapColumn from "./RoadmapColumn";
import { WidthContext } from "context/WidthContext";
import { useSearchParams } from "react-router-dom";

interface RoadmmapListProp {
  roadmapList: {
    status: string;
    data: SuggestionType[];
  }[];
}
const RoadmapList = ({ roadmapList }: RoadmmapListProp) => {
  const { width } = useContext(WidthContext);
  const [searchParams] = useSearchParams();
  const roadmapParams = searchParams.get("view") || "planned";

  const modifiedData =
    width < 768
      ? roadmapList?.filter((roadmap) => roadmap.status === roadmapParams)
      : roadmapList;

  return (
    <section className="flex gap-[0.625rem] py-6 max-md:px-6 md:py-8 xl:gap-[1.875rem] xl:py-12">
      {modifiedData?.map((roadmap, i) => {
        return <RoadmapColumn key={i} roadmap={roadmap} />;
      })}
    </section>
  );
};

export default RoadmapList;
