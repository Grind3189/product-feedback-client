import arrowLeftIc from "@assets/shared/icon-arrow-left.svg";
import CustomButton from "@components/shared/CustomButton";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

const FeedbackLayout = () => {
  const location = useLocation();
  const params = useParams()
  console.log(params)
  return (
    <div className="max-w-[730px] max-md:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={arrowLeftIc} alt="arrow left icon" />
          <Link
            to={location.state ? location.state.prevPath : "/"}
            className="text-[0.8125rem] font-bold text-dark-gray-#647196 md:text-[0.875rem]"
          >
            Go Back
          </Link>
        </div>
        {location.pathname !== "/feedback/create" && (
          <Link to={`/feedback/edit/${params.feedbackId}`} state={{prevPath: location.pathname}}>
            <CustomButton bgColor="blue">Edit Feedback</CustomButton>
          </Link>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default FeedbackLayout;
