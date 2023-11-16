
import CustomButton from "../../../shared/CustomButton";

const AddComment = () => {
  return (
    <form className="flex flex-col gap-6 rounded-[10px] bg-white p-6 md:px-[2.125rem]">
      <h1 className="text-[1.125rem] font-bold tracking-[-0.25px] text-light-navy-blue-#3A4374">
        Add Comment
      </h1>
      <textarea
        className="h-[80px] resize-none rounded-[5px] bg-light-gray-#F7F8FD p-4 text-[0.8125rem] outline-none focus:border focus:border-blue-#4661E6 md:text-[0.9375rem]"
        placeholder="Type your comment here"
      />
      <div className="flex items-center justify-between">
        <span className="text-[0.8125rem] text-dark-gray-#647196">
          250 Characters left
        </span>
        <CustomButton bgColor="purple">Post Comment</CustomButton>
      </div>
    </form>
  );
};

export default AddComment;
