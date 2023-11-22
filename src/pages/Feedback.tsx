import AddComment from "@components/feedback/feedbackDetails/comments/AddComment";
import CommentList from "@components/feedback/feedbackDetails/comments/CommentList";
import SuggestionCard from "@components/shared/SuggestionCard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { makeRequest } from "utils/makeRequest";
import { SuggestionType } from "utils/types";

const Feedback = () => {
  const params = useParams();
  const [feedback, setFeedback] = useState<SuggestionType>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchFeedback = async () => {
      setLoading(true);
      try {
        const res = await makeRequest.get(`/suggestion/${params.feedbackId}`);
        setFeedback(res.data);
        localStorage.setItem("feedbackCreator", JSON.stringify(res.data.userId))
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  const handleLike = async () => {
    const res = await makeRequest.get(`/suggestion/like/${params.feedbackId}`);
    setFeedback(res.data)
    
  };

  return (
    <main className="mt-6 flex flex-col gap-6">
      {loading ? (
        <h1 className="text-[2rem] font-bold text-light-navy-blue-#3A4374 md:w-[689px] xl:w-[730px]">
          Loading...
        </h1>
      ) : (
        <>
          {feedback && <SuggestionCard suggestion={feedback} handleClick={handleLike} type="view" />}
          {feedback?.comments && <CommentList comments={feedback.comments} setFeedback={setFeedback} />}
          <AddComment setFeedback={setFeedback} />
        </>
      )}
    </main>
  );
};

export default Feedback;
