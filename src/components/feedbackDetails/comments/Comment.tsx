import { useState } from "react";
import avatarImg from "../../../assets/user-images/image-anne.jpg";
import AddReply from "../reply/AddReply";
import ReplyList from "../reply/ReplyList";

const Comment = () => {
  const [addComment, setAddComment] = useState<boolean>(false);
  const hasReplies = false;

  const toggleAddComment = () => {
    setAddComment(!addComment);
  };
  return (
    <div
      className={`grid grid-cols-[40px_auto] gap-4 border-b pb-6 md:gap-x-8 last:border-none ${
        hasReplies ? "md:gap-y-0" : "md:gap-y-[1.0625rem]"
      } md:pb-8`}
    >
      <img
        src={avatarImg}
        alt="image of the user"
        className="h-[40px] w-[40px] self-center rounded-[50%] object-cover"
      />

      <div className="flex items-center text-[0.8125rem] md:text-[0.875rem]">
        <div className="flex flex-col text-light-navy-blue-#3A4374">
          <span className="font-bold tracking-[-0.181px] md:tracking-[-0.194px]">
            Anne Valentine
          </span>
          <span>@annev1990</span>
        </div>
        <button
          className="ml-auto font-semibold text-blue-#4661E6"
          onClick={toggleAddComment}
        >
          Reply
        </button>
      </div>

      <div className="relative col-start-1 col-end-[-1] md:col-start-2">
        <p className={`text-[0.8125rem] text-dark-gray-#647196 md:text-[0.9375rem] ${hasReplies && "mt-4"}`}>
          Also, please allow styles to be applied based on system preferences. I
          would love to be able to browse Frontend Mentor in the evening after
          my device’s dark mode turns on without the bright background it
          currently has.
        </p>

        {/* Comment vertical line */}
        {hasReplies && !addComment && (
          <div className="absolute left-[18px] top-[23px] h-full border-r max-md:hidden md:left-[-55px]" />
        )}
      </div>

      {addComment && <AddReply />}
      {hasReplies && <ReplyList />}
    </div>
  );
};

export default Comment;
