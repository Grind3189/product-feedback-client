import AddComment from "@components/feedback/feedbackDetails/comments/AddComment";
import CommentList from "@components/feedback/feedbackDetails/comments/CommentList";
import SuggestionCard from "@components/shared/SuggestionCard";
import { useParams } from "react-router-dom";
import useFetch from "hooks/useFetch";

const Feedback = () => {
  const params = useParams();
  const [feedback, loading] = useFetch(
    `/suggestion/${params.feedbackId}`,
  );

  return (
    <main className="mt-6 flex flex-col gap-6">
      {loading ? (
        <h1 className="text-[2rem] font-bold text-light-navy-blue-#3A4374 md:w-[689px] xl:w-[730px]">
          Loading...
        </h1>
      ) : (
        <>
          {feedback && <SuggestionCard suggestion={feedback} />}
          {feedback?.comments && <CommentList comments={feedback.comments} />}
          <AddComment />
        </>
      )}
    </main>
  );
};

export default Feedback;
