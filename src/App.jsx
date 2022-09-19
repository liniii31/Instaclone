import Landingpage from "./components/Landing/landingpage";
import PostView from "./components/PostView/Postview";
import PostCard from "./components/PostCard/PostCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Postview" element={<PostView />} />
          <Route path="/PostCard" element={<PostCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
