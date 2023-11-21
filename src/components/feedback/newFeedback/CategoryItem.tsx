import { Menu } from "@headlessui/react";
import checkIc from "@assets/shared/icon-check.svg";

interface CategoryItemProp {
  category: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  pickedCategory: string;
}

const CategoryItem = ({
  category,
  handleClick,
  pickedCategory,
}: CategoryItemProp) => {
  return (
    <Menu.Item>
      <button
        className="flex w-full items-center justify-between border-b px-6 py-3 group"
        data-value={category}
        onClick={handleClick}
      >
        <span
          className={`text-[0.8125rem] lg:group-hover:text-purple-#AD1FEA ${category === "ui" || category === "ux" ? "uppercase" : "capitalize"} ${
            pickedCategory === category
              ? "text-purple-#AD1FEA"
              : "text-light-navy-blue-#3A4374 "
          } md:text-[0.9375rem] xl:text-[1rem]`}
        >
          {category}
        </span>
        {pickedCategory === category && <img src={checkIc} alt="check icon" />}
      </button>
    </Menu.Item>
  );
};

export default CategoryItem;
