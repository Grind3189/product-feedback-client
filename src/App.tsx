import NewFeedback from "pages/NewFeedback";
import FeedbackLayout from "./components/layouts/FeedbackLayout";
import Layout from "./components/layouts/Layout";
import Feedback from "./pages/Feedback";
import Suggestions from "./pages/Suggestions";
import { Routes, Route } from "react-router-dom";
import Roadmap from "pages/Roadmap";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Suggestions />} />

        <Route element={<FeedbackLayout />}>
          <Route path="feedback/create" element={<NewFeedback type="create" />} />
          <Route path="feedback/edit/:feedbackId" element={<NewFeedback type="edit" />} />
          <Route path="feedback/:feedbackId" element={<Feedback />} />
        </Route>
      </Route>

      <Route path="/roadmap" element={<Roadmap />} />
    </Routes>
  );
}

export default App;
