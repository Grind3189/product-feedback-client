import CustomButton from "@components/shared/CustomButton";

interface DeleteModalProp {
  toggleModal: () => void;
  handleDelete: () => void
  type: string
}

const DeleteModal = ({ toggleModal, handleDelete, type }: DeleteModalProp) => {
 
  return (
    <div
      className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center border bg-black/50"
      onClick={toggleModal}
    >
      <div
        className="flex flex-col gap-4 rounded-[10px] bg-white p-6 text-light-navy-blue-#3A4374 md:w-[480px]"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-[1.125rem] font-bold">Delete this {type}?</h1>
        <p className="text-[0.8125rem] font-medium text-dark-gray-#647196">
          Are you sure you want to delete this {type}?
        </p>
        <div className="flex flex-col gap-4">
          <CustomButton bgColor="red" handleClick={handleDelete}>
            Delete
          </CustomButton>
          <CustomButton bgColor="light navy blue" handleClick={toggleModal}>
            Cancel
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
