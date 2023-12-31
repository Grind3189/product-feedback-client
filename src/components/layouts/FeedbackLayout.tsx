import arrowLeftIc from "@assets/shared/icon-arrow-left.svg";
import CustomButton from "@components/shared/CustomButton";
import { UserContext } from "context/UserContext";
import { useContext, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { makeRequest } from "utils/makeRequest";

const FeedbackLayout = () => {
  const [isCreator, setIsCreator] = useState<boolean>(false);
  const { user } = useContext(UserContext);
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const res = await makeRequest.get(`/suggestion/${params.feedbackId}`);
        if (res.data.userId === user._id) {
          return setIsCreator(true);
        }
        setIsCreator(false);
      } catch (err) {
        console.error(err);
      }
    };
    if (params?.feedbackId) {
      fetchFeedback();
    }
  }, []);

  return (
    <div className="max-w-[730px] max-md:p-6">
      <div className="flex items-center justify-between">
        <Link
          to={location.state ? location.state.prevPath : "/"}
          className=" flex items-center gap-4 text-[0.8125rem] font-bold text-dark-gray-#647196 md:text-[0.875rem]"
        >
          <img src={arrowLeftIc} alt="arrow left icon" />
          Go Back
        </Link>
        {isCreator && location.state?.currentPath !== "edit" && (
          <Link
            to={`/feedback/edit/${params.feedbackId}`}
            state={{ currentPath: "edit", prevPath: location.pathname }}
          >
            <CustomButton bgColor="blue">Edit Feedback</CustomButton>
          </Link>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default FeedbackLayout;
