import CustomButton from "@components/shared/CustomButton";
import { Link, useLocation } from "react-router-dom";

type FormButtonsProp = {
  handleAddSuggestion: (e: React.MouseEvent) => void;
  newFeedback: {
    title: string;
    category: string;
    description: string;
  };
};

const FormButtons = ({ handleAddSuggestion, newFeedback }: FormButtonsProp) => {
  const location = useLocation();

  return (
    <div className="mt-10 flex flex-col gap-4 md:flex-row md:justify-end">
      <Link to={location.state ? location.state.prevPath : "/"}>
        <CustomButton bgColor="light navy blue">
          Cancel
        </CustomButton>
      </Link>
      <CustomButton
        handleClick={handleAddSuggestion}
        bgColor="purple"
        disabled={
          !newFeedback.title ||
          !newFeedback.category ||
          !newFeedback.description
        }
      >
        Add Feedback
      </CustomButton>
    </div>
  );
};

export default FormButtons;
