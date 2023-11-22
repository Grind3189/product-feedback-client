import FeedbackForm from "@components/feedback/newAndEditFeedback/FeedbackForm";
import newFeedbackIc from "@assets/shared/icon-new-feedback.svg";
import editFeedbackIc from "@assets/shared/icon-edit-feedback.svg";

interface NewFeedbackProp {
  type: "create" | "edit";
}

function NewFeedback({ type }: NewFeedbackProp) {

  return (
    <div className="relative mt-[3.4375rem] rounded-[10px] bg-white p-6 pt-11 md:mt-[4.25rem] md:p-[2.625rem] md:pt-[3.25rem] xl:w-[540px]">
      <img
        src={type === "create" ? newFeedbackIc : editFeedbackIc}
        alt="plus icon"
        className="absolute top-[-20px] h-[40px] w-[40px] md:h-[56px] md:w-[56px]"
      />
      <FeedbackForm type={type} />
    </div>
  );
}

export default NewFeedback;
