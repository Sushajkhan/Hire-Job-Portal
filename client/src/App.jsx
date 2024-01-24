import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import PostJob from "./components/PostJob";
import FindJobs from "./pages/FindJobs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyJobs from "./pages/MyJobs";
import UpdateJob from "./pages/UpdateJob";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />

          <Route path="/find-jobs" element={<FindJobs />} />

          <Route path="/post-job" element={<PostJob />} />

          <Route path="/about" element={<About />} />
          <Route path="/myjobs" element={<MyJobs />} />
          <Route path="edit-job/:id" element={<UpdateJob />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
