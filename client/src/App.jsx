import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PostJob from "./components/PostJob";
import FindJobs from "./pages/FindJobs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyJobs from "./pages/MyJobs";
import UpdateJob from "./pages/UpdateJob";
import JobDetails from "./pages/JobDetails";
import { Toaster } from "sonner";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />

          <Route path="/findjobs" element={<FindJobs />} />

          <Route path="/post-job" element={<PostJob />} />

          <Route path="/myjobs" element={<MyJobs />} />
          <Route path="edit-job/:id" element={<UpdateJob />} />
          <Route path="view-job/:id" element={<JobDetails />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster richColors closeButton />
    </>
  );
}

export default App;
