import { Menu, Transition } from "@headlessui/react";
import arrowDownIc from "@assets/shared/icon-arrow-down.svg";
import React from "react";
import CategoryItem from "./CategoryItem";

interface NewFeedbackType {
  title: string;
  category: string;
  description: string;
}

interface CategorySelectProp {
  setNewFeedback: React.Dispatch<React.SetStateAction<NewFeedbackType>>;
  pickedCategory: string;
}

const CategorySelect = ({
  setNewFeedback,
  pickedCategory,
}: CategorySelectProp) => {
  const categoryList: string[] = ["feature", "ui", "ux", "enhancement", "bug"];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    //There's a bug on finding dataset.value when I dont put it in a variable
    const category = e.currentTarget.dataset.value;
    e.preventDefault();
    setNewFeedback((prev: any) => {
      return {
        ...prev,
        category,
      };
    });
  };

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
              <span
                className={`text-[0.8125rem] text-light-navy-blue-#3A4374 md:text-[0.9375rem] xl:text-[1rem] ${
                  pickedCategory === "ui" || pickedCategory === "ux"
                    ? "uppercase"
                    : "capitalize"
                }`}
              >
                {pickedCategory}
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
                  return (
                    <CategoryItem
                      key={category}
                      category={category}
                      handleClick={handleClick}
                      pickedCategory={pickedCategory}
                    />
                  );
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
