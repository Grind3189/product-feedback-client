import { Menu } from "@headlessui/react";
import { Link, useSearchParams } from "react-router-dom";
import checkIc from "@assets/shared/icon-check.svg";

interface SortItemProp {
  pickedSort: string;
  sort: string;
}

const SortItem = ({ pickedSort, sort }: SortItemProp) => {
  const [searchParams] = useSearchParams()
  const genNewSearchParams = (filterName: string, value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set(filterName, value)
    return `?${params.toString()}`
  }
  
  return (
    <Menu.Item>
      <Link
        to={genNewSearchParams("sort", sort)}
        className="group flex items-center justify-between border-b px-6 py-3"
      >
        <span
          className={`lg:group-hover:text-purple-#AD1FEA ${
            pickedSort === sort && "text-purple-#AD1FEA"
          }`}
        >
          {sort}
        </span>
        {pickedSort === sort && <img src={checkIc} alt="check icon" />}
      </Link>
    </Menu.Item>
  );
};

export default SortItem;
