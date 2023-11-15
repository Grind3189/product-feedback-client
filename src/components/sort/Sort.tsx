import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import checkIc from "../../assets/shared/icon-check.svg";
import React from "react";

const Sort = () => {
  const sortLists: string[] = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];
  const [searchParams] = useSearchParams();
  const pickedSort = searchParams.get("sort");
  return (
    <div className="relative">
      <Menu>
        <Menu.Button className="flex items-center gap-2">
          <span className="text-[0.875rem]">
            Sort by : <b>Most Upvotes</b>
          </span>
          <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1l4 4 4-4"
              stroke="#fff"
              stroke-width="2"
              fill="none"
              fill-rule="evenodd"
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
          <Menu.Items className="text-dark-gray-#647196 absolute bottom-[-230px] flex w-[255px] flex-col rounded-[10px] border bg-white">
            {sortLists.map((sort) => {
              return (
                <Menu.Item key={sort}>
                  <Link
                    to={`?sort=${sort}`}
                    className="group flex items-center justify-between border-b px-6 py-3"
                  >
                    <span
                      className={`group-hover:text-purple-#AD1FEA ${
                        pickedSort === sort && "text-purple-#AD1FEA"
                      }`}
                    >
                      {sort}
                    </span>
                    {pickedSort === sort && (
                      <img src={checkIc} alt="check icon" />
                    )}
                  </Link>
                </Menu.Item>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Sort;
