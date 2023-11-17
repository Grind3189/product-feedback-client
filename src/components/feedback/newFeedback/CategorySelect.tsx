import { Menu, Transition } from "@headlessui/react";
import arrowDownIc from "@assets/shared/icon-arrow-down.svg";
import React from "react";
import CategoryItem from "./CategoryItem";

const CategorySelect = () => {
  const categoryList: string[] = ["Feature", "UI", "UX", "Enhancement", "Bug"];
  return (
    <div className="relative">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button
              className={`flex w-full items-center justify-between rounded-[5px] bg-light-gray-#F7F8FD px-4 py-[0.8125rem] ${
                open && "border border-blue-#4661E6"
              }`}
            >
              <span className="text-[0.8125rem] text-light-navy-blue-#3A4374 md:text-[0.9375rem] xl:text-[1rem]">
                Feature
              </span>
              <img
                src={arrowDownIc}
                alt="arrow down icon"
                className={`transition-all ${
                  open ? "-rotate-180" : "rotate-0"
                }`}
              />
            </Menu.Button>
            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="translate-y-[-20%] opacity-0"
              enterTo="translate-y-0 opacity-100"
              leave="transition ease-in duration-100"
              leaveFrom="translate-y-0 opacity-100"
              leaveTo="translate-y-[-20%] opacity-0"
            >
              <Menu.Items
                className="absolute top-[60px] z-50 w-full rounded-[10px] bg-white shadow-md"
                static
              >
                {categoryList.map((category) => {
                  return <CategoryItem key={category} category={category} />;
                })}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

export default CategorySelect;
