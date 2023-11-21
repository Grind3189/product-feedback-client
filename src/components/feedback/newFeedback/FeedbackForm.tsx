import FormInputs from "./FormInputs";
import { useState } from "react";
import { makeRequest } from "utils/makeRequest";
import { useNavigate } from "react-router-dom";
import FormButtons from "./FormButtons";

interface NewFeedbackProp {
  title: string;
  category: string;
  description: string;
}

const FeedbackForm = () => {
  const [newFeedback, setNewFeedback] = useState<NewFeedbackProp>({
    title: "",
    category: "feature",
    description: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setNewFeedback((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleAddSuggestion = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await makeRequest.post("/suggestion/addSuggestion", {
        newFeedbackData: newFeedback,
      });
    } catch (err) {
      console.error(err);
    }
    setNewFeedback({
      category: "Feature",
      description: "",
      title: "",
    });
    navigate("/");
  };
  return (
    <form>
      <div className="flex flex-col gap-6 md:gap-6">
        <h1 className="text-[1.125rem] font-bold tracking-[-0.25px] text-light-navy-blue-#3A4374 md:text-[1.5rem]">
          Create New Feedback
        </h1>

        <FormInputs
          handleChange={handleInputChange}
          newFeedback={newFeedback}
          setNewFeedback={setNewFeedback}
        />
      </div>

      <FormButtons
        handleAddSuggestion={handleAddSuggestion}
        newFeedback={newFeedback}
      />
    </form>
  );
};

export default FeedbackForm;
