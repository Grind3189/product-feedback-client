import MenuCard from "./MenuCard";

const Categories = () => {
  const categories: string[] = [
    "All",
    "UI",
    "UX",
    "Enhancement",
    "Bug",
    "Feature",
  ];
  return (
    <MenuCard>
      <ul className="flex flex-wrap gap-2 gap-y-[20px] md:gap-y-[14px] md:items-center">
        {categories.map((category) => {
          return (
            <li className="bg-gray-#F2F4FF rounded-[0.625rem] px-4 py-[6px]" key={category}>
              <span className="text-blue-#4661E6 text-[0.8125rem] font-semibold">
                {category}
              </span>
            </li>
          );
        })}
      </ul>
    </MenuCard>
  );
};

export default Categories;
