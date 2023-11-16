import NewFeedback from "pages/NewFeedback";
import FeedbackLayout from "./components/layouts/FeedbackLayout";
import Layout from "./components/layouts/Layout";
import Feedback from "./pages/Feedback";
import Suggestions from "./pages/Suggestions";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Suggestions />} />

        <Route element={<FeedbackLayout />}>
          <Route path="feedback/create" element={<NewFeedback />} />
          <Route path="feedback/:feedbackId" element={<Feedback />} />
        </Route>
        
      </Route>
    </Routes>
  );
}

export default App;
