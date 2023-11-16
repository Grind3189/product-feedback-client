import AddComment from "../components/feedbackDetails/comments/AddComment";
import CommentList from "../components/feedbackDetails/comments/CommentList";
import SuggestionCard from "../components/shared/SuggestionCard";

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
