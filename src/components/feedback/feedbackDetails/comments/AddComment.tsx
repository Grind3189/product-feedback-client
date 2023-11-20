import { useState } from "react";
import CustomButton from "../../../shared/CustomButton";
import { makeRequest } from "utils/makeRequest";
import { useParams } from "react-router-dom";
import { SuggestionType } from "utils/types";
import { getUserId } from "utils/getUserIdFromStorage";

interface AddCommentProp {
  setFeedback: React.Dispatch<React.SetStateAction<SuggestionType | undefined>>;
}

const AddComment = ({ setFeedback }: AddCommentProp) => {
  const [newComment, setNewComment] = useState<string>("");
  const { feedbackId } = useParams();
  const remaining = 250 - newComment.length;

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (newComment) {
      try {
        const res = await makeRequest.post(
          `suggestion/addComment/${feedbackId}`,
          {
            userId: getUserId(),
            newComment,
          },
        );
        setFeedback(res.data);
        return setNewComment("");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <form className="flex flex-col gap-6 rounded-[10px] bg-white p-6 md:px-[2.125rem]">
      <h1 className="text-[1.125rem] font-bold tracking-[-0.25px] text-light-navy-blue-#3A4374">
        Add Comment
      </h1>
      <textarea
        className={`h-[80px] resize-none rounded-[5px] bg-light-gray-#F7F8FD p-4 text-[0.8125rem] outline-none invalid:border-red-500 focus:border focus:border-blue-#4661E6 md:text-[0.9375rem]`}
        placeholder="Type your comment here"
        onChange={handleCommentChange}
        value={newComment}
        maxLength={250}
      />
      <div className="flex items-center justify-between">
        <span className="text-[0.8125rem] text-dark-gray-#647196">
          {remaining >= 0 ? remaining : 0} Characters left
        </span>
        <CustomButton bgColor="purple" handleClick={handleAddComment} disabled={newComment.length <= 0}>
          Post Comment
        </CustomButton>
      </div>
    </form>
  );
};

export default AddComment;
