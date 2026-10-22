import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Tasks from "./pages/Tasks/Tasks";
import CreateTask from "./pages/CreateTask/CreateTask";
import EditTask from "./pages/EditTask/EditTask";
import Signup from './pages/Signup/SignUp';
import Posts from "./pages/Posts/Posts";
import CreatePost from "./pages/CreatePost/CreatePost";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />

        <Route path="/dashboard" element={<Layout />}>
          <Route
            index
            element={<Dashboard />}
          />

          <Route
            path="tasks"
            element={<Tasks  />}
          />

          <Route
            path="create-task"
            element={<CreateTask />}
          />

          <Route
            path="edit-task/:id"
            element={<EditTask  />}
          />
          <Route path="/dashboard/posts" element={<Posts />} />
          <Route path="/dashboard/create-post" element={<CreatePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;