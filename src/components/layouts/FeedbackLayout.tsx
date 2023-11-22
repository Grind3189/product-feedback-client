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

  console.log(location)

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

    fetchFeedback();
  }, []);


  return (
    <div className="max-w-[730px] max-md:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={arrowLeftIc} alt="arrow left icon" />
          <Link
            to={location.state ? location.state.prevPath : "/"}
            state={{currentPath: "edit"}}
            className="text-[0.8125rem] font-bold text-dark-gray-#647196 md:text-[0.875rem]"
          >
            Go Back
          </Link>
        </div>
        {isCreator && (
          <Link
            to={`/feedback/edit/${params.feedbackId}`}
            state={{ prevPath: location.pathname }}
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
