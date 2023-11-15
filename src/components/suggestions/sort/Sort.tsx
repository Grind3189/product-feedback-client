import { Menu, Transition } from "@headlessui/react";
import { useSearchParams } from "react-router-dom";
import React from "react";
import SortItem from "./SortItem";

const Sort = () => {
  const sortLists: string[] = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];
  const [searchParams] = useSearchParams();
  const pickedSort: string = searchParams.get("sort") || "Most Upvotes";

  return (
    <div className="relative">
      <Menu>
        <Menu.Button className="flex items-center gap-2">
          <span className="text-[0.875rem]">
            Sort by : <b>{pickedSort}</b>
          </span>
          <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1l4 4 4-4"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
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
          <Menu.Items className="text-dark-gray-#647196 absolute bottom-[-240px] flex w-[255px] flex-col rounded-[10px] bg-white shadow-md">
            {sortLists.map(sort => {
              return (
                <SortItem pickedSort={pickedSort} sort={sort} key={sort} />
              )
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Sort;
