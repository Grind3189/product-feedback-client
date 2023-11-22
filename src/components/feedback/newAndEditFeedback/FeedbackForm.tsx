import FormInputs from "./FormInputs";
import { useState, useEffect } from "react";
import { makeRequest } from "utils/makeRequest";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import FormButtons from "./FormButtons";
import DeleteModal from "../feedbackDetails/delete/DeleteModal";

interface NewFeedbackProp {
  title: string;
  category: string;
  description: string;
}

interface FeedbackFormProp {
  type: "create" | "edit";
}

const FeedbackForm = ({ type }: FeedbackFormProp) => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [newFeedback, setNewFeedback] = useState<NewFeedbackProp>({
    title: "",
    category: "feature",
    description: "",
  });
  const [prevFeedback, setPrevFeedback] = useState<NewFeedbackProp>();
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await makeRequest.get(`/suggestion/${params?.feedbackId}`);
      setPrevFeedback({
        title: res.data.title,
        category: res.data.category,
        description: res.data.description,
      });
      setNewFeedback({
        title: res.data.title,
        category: res.data.category,
        description: res.data.description,
      });
    };
    if (type === "edit") {
      fetchData();
    }
  }, []);


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

  const handleSaveSuggestion = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await makeRequest.post(`/suggestion/edit/${params.feedbackId}`, {
        title: newFeedback.title,
        category: newFeedback.category,
        description: newFeedback.description,
      });
      handleNavigate();
    } catch (err) {
      console.error(err);
    }
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
    handleNavigate();
  };

  const handleNavigate = () => {
    setNewFeedback({
      category: "Feature",
      description: "",
      title: "",
    });
    if (type === "create") {
      return navigate("/");
    }
    navigate(location.state ? location.state.prevPath : "/");
  };

  const handleDeleteSuggestion = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await makeRequest.delete(`/suggestion/delete/${params.feedbackId}`);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const toggleModal = () => {
    setShowDeleteModal((prev) => !prev);
  };

  return (
    <form>
      <div className="flex flex-col gap-6 md:gap-6">
        <h1 className="text-[1.125rem] font-bold tracking-[-0.25px] text-light-navy-blue-#3A4374 md:text-[1.5rem]">
          {type === "create"
            ? "Create New Feedback"
            : `Editing '${prevFeedback?.title}'`}
        </h1>

        <FormInputs
          handleChange={handleInputChange}
          newFeedback={newFeedback}
          setNewFeedback={setNewFeedback}
        />
      </div>

      <FormButtons
        handleSubmitForm={
          type === "create" ? handleAddSuggestion : handleSaveSuggestion
        }
        newFeedback={newFeedback}
        type={type}
        prevFeedbackValue={prevFeedback}
        toggleDelete={toggleModal}
      />
      {showDeleteModal && (
        <DeleteModal
          type="suggestion"
          toggleModal={toggleModal}
          handleDelete={handleDeleteSuggestion}
        />
      )}
    </form>
  );
};

export default FeedbackForm;
