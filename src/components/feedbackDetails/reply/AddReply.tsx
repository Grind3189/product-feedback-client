import CustomButton from "../../shared/CustomButton";

const AddReply = () => {
  return (
    <div className="col-start-1 col-end-[-1] mb-4 mt-2 flex gap-4 md:col-start-2 md:mb-8 md:mt-6">
      <textarea className="flex-1 resize-none rounded-[5px] border px-6 py-4 text-[0.8125rem] outline-none focus:border-blue-#4661E6 focus:bg-light-gray-#F7F8FD md:text-[0.9375rem]" />

      <div className="h-[117px]">
        <CustomButton bgColor="purple">Post Reply</CustomButton>
      </div>
    </div>
  );
};

export default AddReply;
