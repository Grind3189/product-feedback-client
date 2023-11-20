import { CommentType, SuggestionType } from "utils/types";
import Comment from "./Comment";

interface CommentListProp {
  comments: CommentType[]
  setFeedback: React.Dispatch<React.SetStateAction<SuggestionType | undefined>>
}

const CommentList = ({comments, setFeedback}: CommentListProp ) => {
  return (
    <div className="rounded-[10px] bg-white p-6 md:px-[2.125rem]">
      {comments.length ? <h1 className="mb-6 text-[1.125rem] font-bold tracking-[-0.25px] text-light-navy-blue-#3A4374">
        {comments.length} {comments.length > 1 ? "Comments" : "Comment"}
      </h1> :
      <h1 className="mb-6 text-[1.125rem] font-bold tracking-[-0.25px] text-light-navy-blue-#3A4374">
        No posted comments
      </h1>}

      <div className="flex flex-col gap-8">
        {comments.map((comment, i) => {
          return <Comment key={i} comment={comment} setFeedback={setFeedback} />;
        })}
      </div>
    </div>
  );
};

export default CommentList;
