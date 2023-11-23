import CustomButton from "@components/shared/CustomButton";
import { useLocation, useNavigate } from "react-router-dom";

interface NewFeedbackType {
  title: string;
  category: string;
  description: string;
}

type FormButtonsProp = {
  handleSubmitForm: (e: React.MouseEvent) => void;
  newFeedback: NewFeedbackType;
  type: "create" | "edit";
  prevFeedbackValue: NewFeedbackType | undefined;
  toggleDelete: () => void;
  isSubmitting: boolean;
};

const FormButtons = ({
  handleSubmitForm,
  newFeedback,
  type,
  prevFeedbackValue,
  toggleDelete,
  isSubmitting,
}: FormButtonsProp) => {
  const location = useLocation();
  const navigate = useNavigate();

  //Condition for disable button
  const hasBlankInput =
    !newFeedback.title || !newFeedback.category || !newFeedback.description;
  const hasChanged =
    JSON.stringify(prevFeedbackValue) === JSON.stringify(newFeedback);

  const handleCancel = () => {
    navigate(location.state ? location.state.prevPath : "/");
  };

  const handleDeleteModal = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleDelete();
  };

  return (
    <div
      className={`mt-10 ${
        type === "edit" && "flex flex-col gap-4 md:flex-row"
      }`}
    >
      {type === "edit" && (
        <CustomButton bgColor="red" handleClick={handleDeleteModal}>
          Delete
        </CustomButton>
      )}
      <div
        className={`flex ${
          type === "edit"
            ? "flex-col gap-4 md:ml-auto md:flex-row"
            : "flex-col gap-2 md:flex-row md:justify-end"
        }`}
      >
        <CustomButton bgColor="light navy blue" handleClick={handleCancel}>
          Cancel
        </CustomButton>
        <CustomButton
          handleClick={handleSubmitForm}
          bgColor="purple"
          disabled={
            type === "create" ? hasBlankInput : hasBlankInput || hasChanged
          }
        >
          {type === "create" ? (
            <span>{isSubmitting ? "Submitting..." : "Save"}</span>
          ) : (
            <span>{isSubmitting ? "Saving changes..." : "Save changes"}</span>
          )}
        </CustomButton>
      </div>
    </div>
  );
};

export default FormButtons;
