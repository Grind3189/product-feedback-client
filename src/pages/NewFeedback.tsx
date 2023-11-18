import FeedbackForm from "@components/feedback/newFeedback/FeedbackForm";
import newFeedbackIc from "@assets/shared/icon-new-feedback.svg";

function NewFeedback() {
  return (
    <div className="relative mt-[3.4375rem] rounded-[10px] bg-white p-6 pt-11 md:mt-[4.25rem] md:p-[2.625rem] md:pt-[3.25rem] xl:w-[540px]">
      <img
        src={newFeedbackIc}
        alt="plus icon"
        className="absolute top-[-20px] h-[40px] w-[40px] md:w-[56px] md:h-[56px]"
      />
      <FeedbackForm />
    </div>
  );
}

export default NewFeedback;
