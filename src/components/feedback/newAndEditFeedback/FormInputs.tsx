import FormInputDesc from "./FormInputDesc";
import CategorySelect from "./CategorySelect";

interface NewFeedbackType {
  title: string;
  category: string;
  description: string;
}

type FormInputsProp = {
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  newFeedback: NewFeedbackType;
  setNewFeedback: React.Dispatch<React.SetStateAction<NewFeedbackType>>;
};

const FormInputs = ({ handleChange, newFeedback, setNewFeedback }: FormInputsProp) => {
  return (
    <>
      <FormInputDesc
        title="Feedback Title"
        guide="Add a short, descriptive headline"
      >
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={newFeedback.title}
          className="rounded-[5px] bg-light-gray-#F7F8FD p-4 text-light-navy-blue-#3A4374 outline-none focus:border focus:border-blue-#4661E6"
        />
      </FormInputDesc>
      <FormInputDesc
        guide="Choose a category for your feedback"
        title="Category"
      >
        <CategorySelect setNewFeedback={setNewFeedback} pickedCategory={newFeedback.category} />
      </FormInputDesc>
      <FormInputDesc
        guide="Include any specific comments on what should be improved, added, etc."
        title="Feedback Detail"
      >
        <div className="flex flex-col">
          <textarea
            name="description"
            onChange={handleChange}
            value={newFeedback.description}
            className="h-[120px] resize-none rounded-[5px] bg-light-gray-#F7F8FD p-4 outline-none focus:border focus:border-blue-#4661E6"
          />
        </div>
      </FormInputDesc>
    </>
  );
};

export default FormInputs;
