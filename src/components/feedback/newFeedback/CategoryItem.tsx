import { Menu } from "@headlessui/react";
import checkIc from "@assets/shared/icon-check.svg";

interface CategoryItemProp {
  category: string;
}

const CategoryItem = ({ category }: CategoryItemProp) => {
  return (
    <Menu.Item>
      <button className="flex w-full items-center justify-between border-b px-6 py-3">
        <span className="text-[0.8125rem] text-light-navy-blue-#3A4374 md:text-[0.9375rem] xl:text-[1rem]">
          {category}
        </span>
        <img src={checkIc} alt="check icon" />
      </button>
    </Menu.Item>
  );
};

export default CategoryItem;
