import CustomButton from "@components/shared/CustomButton";
import FormInputs from "./FormInputs";

const FeedbackForm = () => {
  return (
    <form>
      <div className="flex flex-col gap-6">
        <h1 className="text-[1.125rem] font-bold tracking-[-0.25px] text-light-navy-blue-#3A4374">
          Create New Feedback
        </h1>

        <FormInputs />
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <CustomButton bgColor="purple">Cancel</CustomButton>
        <CustomButton bgColor="purple">Add Feedback</CustomButton>
      </div>
    </form>
  );
};

export default FeedbackForm;
