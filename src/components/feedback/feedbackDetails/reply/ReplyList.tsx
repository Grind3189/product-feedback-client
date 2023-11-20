import { ReplyType, SuggestionType } from "utils/types";
import ReplyDetails from "./ReplyDetails";

interface ReplyListProp {
  replies: ReplyType[];
  setFeedback: React.Dispatch<React.SetStateAction<SuggestionType | undefined>>;
  commentId: string;
}

const ReplyList = ({ replies, setFeedback, commentId }: ReplyListProp) => {
  return (
    <div className="col-span-2 flex flex-col">
      {replies.map((reply, i) => {
        return (
          <ReplyDetails
            isLastChild={i === replies.length - 1}
            reply={reply}
            key={i}
            setFeedback={setFeedback}
            commentId={commentId}
          />
        );
      })}
    </div>
  );
};

export default ReplyList;
