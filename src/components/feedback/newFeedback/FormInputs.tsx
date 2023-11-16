import FormInputDesc from "./FormInputDesc";
import CategorySelect from "./CategorySelect";

const FormInputs = () => {
  return (
    <>
      <FormInputDesc
        title="Feedback Title"
        guide="Add a short, descriptive headline"
      >
        <input
          type="text"
          className="rounded-[5px] bg-light-gray-#F7F8FD p-4 text-light-navy-blue-#3A4374 outline-none"
        />
      </FormInputDesc>
      <FormInputDesc
        guide="Choose a category for your feedback"
        title="Category"
      >
        <CategorySelect />
      </FormInputDesc>
      <FormInputDesc
        guide="Include any specific comments on what should be improved, added, etc."
        title="Feedback Detail"
      >
        <div className="flex flex-col">
          <textarea className="h-[120px] resize-none rounded-[5px] bg-light-gray-#F7F8FD p-4 outline-none" />
          <span className="text-[0.875rem] text-[#D73737]">Can't be empty</span>
        </div>
      </FormInputDesc>
    </>
  );
};

export default FormInputs;
