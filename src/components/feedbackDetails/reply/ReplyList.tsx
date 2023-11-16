import React from "react";
import ReplyDetails from "./ReplyDetails";

const ReplyList = () => {
  const numOfReplies: number[] = [1, 2, 3, 4, 5];
  const isLast: boolean = false;
  return (
    <div className="col-span-2 flex flex-col">
      {numOfReplies.map((reply, i) => {
        return <ReplyDetails isLastChild={i === numOfReplies.length - 1} />;
      })}
    </div>
  );
};

export default ReplyList;
