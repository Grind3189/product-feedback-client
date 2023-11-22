import { Link, useSearchParams } from "react-router-dom";
import MenuCard from "./MenuCard";

interface CategoriesProp {
  toggleMenu: () => void
}

const Categories = ({toggleMenu}: CategoriesProp) => {
  const [searchParams] = useSearchParams();
  const categoryParams = searchParams.get("category");
  const categories: string[] = [
    "All",
    "UI",
    "UX",
    "Enhancement",
    "Bug",
    "Feature",
  ];

  const genNewSearchParams = (filterName: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(filterName, value);
    return `?${params.toString()}`;
  };

  return (
    <MenuCard>
      <ul className="flex flex-wrap gap-2 gap-y-[20px] md:items-center md:gap-y-[14px]">
        {categories.map((category) => {
          return (
            <li
              className={`rounded-[0.625rem] text-blue-#4661E6 ${
                categoryParams === category ||
                (!categoryParams && category === "All")
                  ? "bg-blue-#4661E6 text-white"
                  : "bg-gray-#F2F4FF"
              }`}
              key={category}
              onClick={toggleMenu}

            >
              <Link
                to={genNewSearchParams("category", category)}
                className="text-[0.8125rem] font-semibold px-4 py-[6px] inline-block"
              >
                {category}
              </Link>
            </li>
          );
        })}
      </ul>
    </MenuCard>
  );
};

export default Categories;
