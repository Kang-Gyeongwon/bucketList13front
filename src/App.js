import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<div>HomePage</div>} />
    <Route path="/bucketlist" element={<div>BucketListPage</div>} />
  </Routes>
  </BrowserRouter>
}

export default App