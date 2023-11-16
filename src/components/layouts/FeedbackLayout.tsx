import arrowLeftIc from "../../assets/shared/icon-arrow-left.svg";
import { Link, Outlet } from "react-router-dom";

const FeedbackLayout = () => {
  return (
    <div className="border max-md:p-6">
      <div className="flex items-center gap-4">
        <img src={arrowLeftIc} alt="arrow left icon" />
        <Link
          to="#"
          className="text-[0.8125rem] font-bold text-dark-gray-#647196"
        >
          Go Back
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default FeedbackLayout;
