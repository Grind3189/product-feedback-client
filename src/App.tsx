import Layout from "./components/layout/Layout"
import Suggestions from "./pages/Suggestions"
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Suggestions />} />
      </Route>
    </Routes>
  )
}

export default App
