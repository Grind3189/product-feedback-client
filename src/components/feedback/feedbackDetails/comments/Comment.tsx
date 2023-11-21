import { useState } from "react";
import AddReply from "../reply/AddReply";
import ReplyList from "../reply/ReplyList";
import { CommentType, SuggestionType } from "utils/types";
import DeleteButton from "@components/shared/DeleteButton";

interface CommentProp {
  comment: CommentType;
  setFeedback: React.Dispatch<React.SetStateAction<SuggestionType | undefined>>;
}

const Comment = ({ comment, setFeedback }: CommentProp) => {
  const [addReply, setAddReply] = useState<boolean>(false);

  const toggleAddComment = () => {
    setAddReply(!addReply);
  };

  return (
    <div
      className={`grid grid-cols-[40px_auto] gap-4 border-b pb-6 last:border-none md:gap-x-8 ${
        comment.replies.length > 0 ? "md:gap-y-0" : "md:gap-y-[1.0625rem]"
      } md:pb-8`}
    >
      <img
        src={
          comment.user.image ||
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        }
        alt={`image of ${comment.user.username} `}
        className="h-[40px] w-[40px] self-center rounded-[50%] bg-gray-100 object-cover"
      />

      <div className="flex items-center text-[0.8125rem] md:text-[0.875rem]">
        <div className="flex flex-col text-light-navy-blue-#3A4374">
          <span className="font-bold capitalize tracking-[-0.181px] md:tracking-[-0.194px]">
            {comment.user.name}
          </span>
          <span>{comment.user.username}</span>
        </div>
        <div className="ml-auto flex flex-col items-center gap-1">
          <button
            className="font-semibold text-blue-#4661E6"
            onClick={toggleAddComment}
          >
            Reply
          </button>
          <DeleteButton />
        </div>
      </div>

      <div className="relative col-start-1 col-end-[-1] md:col-start-2">
        <p
          className={`text-[0.8125rem] text-dark-gray-#647196 md:text-[0.9375rem] ${
            comment.replies.length > 0 && "mt-4"
          }`}
        >
          {comment.content}
        </p>

        {/* Comment vertical line */}
        {comment.replies.length > 0 && !addReply && (
          <div className="absolute left-[18px] h-full border-r max-md:hidden md:left-[-55px] md:top-[20px]" />
        )}
      </div>

      {addReply && (
        <AddReply
          replyingTo={comment.user.username}
          commentId={comment._id}
          setFeedback={setFeedback}
          toggleAddComment={toggleAddComment}
        />
      )}
      {comment.replies.length > 0 && (
        <ReplyList
          replies={comment.replies}
          setFeedback={setFeedback}
          commentId={comment._id}
        />
      )}
    </div>
  );
};

export default Comment;
