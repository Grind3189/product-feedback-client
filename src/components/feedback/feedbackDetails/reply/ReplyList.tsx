
import { ReplyType } from "utils/types";
import ReplyDetails from "./ReplyDetails";

interface ReplyListProp {
  replies: ReplyType[]
}

const ReplyList = ({replies}: ReplyListProp) => {
 console.log(replies.length)
  return (
    <div className="col-span-2 flex flex-col">
      {replies.map((reply, i) => {
        return (
          <ReplyDetails
            isLastChild={i === replies.length - 1}
            reply={reply}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default ReplyList;
