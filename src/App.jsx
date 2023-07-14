import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import BucketList from "./pages/bucketlist";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bucketlist" element={<BucketList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
