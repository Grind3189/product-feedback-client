import FeedbackForm from "@components/feedback/newFeedback/FeedbackForm";
import newFeedbackIc from "@assets/shared/icon-new-feedback.svg";

function NewFeedback() {
  return (
    <div className="relative mt-[3.4375rem] bg-white p-6 pt-11">
      <img
        src={newFeedbackIc}
        alt="plus icon"
        className="absolute top-[-20px] h-[40px] w-[40px]"
      />
      <FeedbackForm />
    </div>
  );
}

export default NewFeedback;
