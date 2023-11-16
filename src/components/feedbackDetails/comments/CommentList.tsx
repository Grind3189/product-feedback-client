import Comment from "./Comment";

const CommentList = () => {
  const numberOfComments: number[] = [1, 2, 3];
  return (
    <div className="rounded-[10px] bg-white p-6 md:px-[2.125rem]">
      <h1 className="mb-6 text-[1.125rem] font-bold tracking-[-0.25px] text-light-navy-blue-#3A4374">
        4 Comments
      </h1>

      <div className="flex flex-col gap-8">
        {numberOfComments.map((comment) => {
          return <Comment />;
        })}
      </div>
    </div>
  );
};

export default CommentList;
