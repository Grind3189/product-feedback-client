import AddComment from "@components/feedback/feedbackDetails/comments/AddComment";
import CommentList from "@components/feedback/feedbackDetails/comments/CommentList";
import SuggestionCard from "@components/shared/SuggestionCard";
import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react'
import { makeRequest } from "utils/makeRequest";
import { SuggestionType } from "utils/types";

const Feedback = () => {
  const [data, setData] = useState<SuggestionType>()
  const params = useParams()
  console.log(data)
 

  useEffect(() => {
    const fetchFeedback = async () => {
      const res = await makeRequest.get(`/suggestion/${params.feedbackId}`)
      setData(res.data)
    }

    fetchFeedback()
  }, [params])
  return (
    <main className="mt-6 flex flex-col gap-6">
        {data && <SuggestionCard suggestion={data}  />}
        {data?.comments && <CommentList comments={data.comments} />}
        <AddComment />
    </main>
  );
};

export default Feedback;
