import AddComment from "@components/feedback/feedbackDetails/comments/AddComment";
import CommentList from "@components/feedback/feedbackDetails/comments/CommentList";
import SuggestionCard from "@components/shared/SuggestionCard";

const Feedback = () => {
  return (
    <main className="mt-6 flex flex-col gap-6">
        <SuggestionCard />
        <CommentList />
        <AddComment />
    </main>
  );
};

export default Feedback;
