import { useState } from "react";
import AddReply from "./AddReply";
import { ReplyType } from "utils/types";

interface ReplyDetailsProp {
  isLastChild: boolean;
  reply: ReplyType
}

const ReplyDetails = ({ isLastChild, reply }: ReplyDetailsProp) => {
  const [addReply, setAddReply] = useState<boolean>(false);


  const handleToggleReply = () => {
    setAddReply(!addReply);
  };
  return (
    <div
      className={`relative grid grid-cols-[40px_auto] gap-4 pl-6 pt-4 md:gap-x-8 md:gap-y-[0.625rem] md:pl-[45px] last:group`}
    >
      <img
        src={reply.user.image}
        alt="image of the user"
        className="h-[40px] w-[40px] self-center rounded-[50%] object-cover"
      />
      <div className="flex items-center justify-between text-[0.8125rem] md:text-[0.875rem]">
        <div className="flex flex-col text-light-navy-blue-#3A4374">
          <span className="font-bold tracking-[-0.181px] md:tracking-[-0.194px]">
            {reply.user.name}
          </span>
          <span>{reply.user.username}</span>
        </div>
        <button
          className="ml-auto font-semibold text-blue-#4661E6"
          onClick={handleToggleReply}
        >
          Reply
        </button>
      </div>
      <p className="col-start-1 col-end-[-1] text-[0.8125rem] text-dark-gray-#647196 md:col-start-2 md:text-[0.9375rem]">
        <span className="font-bold text-purple-#AD1FEA">{reply.replyingTo}</span>{" "}
        {reply.content}
      </p>

      {/* Reply Line */}
      <div
        className={`absolute h-full border-r md:left-[17px] ${isLastChild && "h-[35px] md:h-[40px]"}`}
      />
      {addReply && <AddReply />}
    </div>
  );
};

export default ReplyDetails;
