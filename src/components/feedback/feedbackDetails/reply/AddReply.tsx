import { makeRequest } from "utils/makeRequest";
import CustomButton from "../../../shared/CustomButton";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { SuggestionType } from "utils/types";

interface AddReplyProp {
  replyingTo: string;
  commentId: string;
  setFeedback: React.Dispatch<React.SetStateAction<SuggestionType | undefined>>;
  toggleAddComment: () => void
}

const AddReply = ({ replyingTo, commentId, setFeedback, toggleAddComment }: AddReplyProp) => {
  const [reply, setReply] = useState<string>("");
  const { feedbackId } = useParams();

  const handleChangeReplyDetails = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setReply(e.target.value);
  };

  const handleAddReply = async () => {
    try {
      const res = await makeRequest.post(`comment/addReply/${feedbackId}`, {
        commentId,
        replyingTo,
        reply,
      });
      setFeedback(res.data);
      setReply("")
      toggleAddComment()
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="col-start-1 col-end-[-1] mb-4 mt-2 flex gap-4 md:col-start-2 md:mb-8 md:mt-6">
      <textarea
        className="flex-1 resize-none rounded-[5px] border px-6 py-4 text-[0.8125rem] outline-none focus:border-blue-#4661E6 focus:bg-light-gray-#F7F8FD md:text-[0.9375rem]"
        onChange={handleChangeReplyDetails}
        maxLength={250}
        value={reply}
        placeholder="Type your reply here"
      />

      <div className="h-[117px]">
        <CustomButton
          bgColor="purple"
          handleClick={handleAddReply}
          disabled={reply.length < 1}
        >
          Post Reply
        </CustomButton>
      </div>
    </div>
  );
};

export default AddReply;
