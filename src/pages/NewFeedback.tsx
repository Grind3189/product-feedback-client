import FeedbackForm from "@components/feedback/newAndEditFeedback/FeedbackForm";
import newFeedbackIc from "@assets/shared/icon-new-feedback.svg";
import editFeedbackIc from "@assets/shared/icon-edit-feedback.svg";
import { useEffect, useState } from "react";
import { makeRequest } from "utils/makeRequest";
import { useParams } from "react-router-dom";

interface NewFeedbackProp {
  type: "create" | "edit";
}

interface PrevFeedbackState {
  title: string;
  category: string;
  description: string;
}

function NewFeedback({ type }: NewFeedbackProp) {
  const params = useParams();
  const [prevFeedback, setPrevFeedback] = useState<PrevFeedbackState>();
  const [loading, setLoading] = useState<boolean>(
    type === "edit" ? true : false,
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await makeRequest.get(`/suggestion/${params?.feedbackId}`);
        setPrevFeedback({
          title: res.data.title,
          category: res.data.category,
          description: res.data.description,
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (type === "edit") {
      fetchData();
    } else setLoading(false);
  }, []);

  return (
    <>
      {loading && type === "edit" ? (
        <h1 className="mt-8 text-[2rem] font-bold text-light-navy-blue-#3A4374 md:m-0 md:mt-5 md:w-[540px]">
          Loading...
        </h1>
      ) : (
        <div className="relative mt-[3.4375rem] rounded-[10px] bg-white p-6 pt-11 md:mt-[4.25rem] md:p-[2.625rem] md:pt-[3.25rem] xl:w-[540px]">
          <img
            src={type === "create" ? newFeedbackIc : editFeedbackIc}
            alt="plus icon"
            className="absolute top-[-20px] h-[40px] w-[40px] md:h-[56px] md:w-[56px]"
          />
          <FeedbackForm type={type} prevFeedback={prevFeedback} />
        </div>
      )}
    </>
  );
}

export default NewFeedback;
