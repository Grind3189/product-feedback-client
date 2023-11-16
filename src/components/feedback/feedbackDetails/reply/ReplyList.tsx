
import ReplyDetails from "./ReplyDetails";

const ReplyList = () => {
  const numOfReplies: number[] = [1, 2, 3, 4, 5];
  return (
    <div className="col-span-2 flex flex-col">
      {numOfReplies.map((reply, i) => {
        return (
          <ReplyDetails
            isLastChild={i === numOfReplies.length - 1}
            key={reply}
          />
        );
      })}
    </div>
  );
};

export default ReplyList;
