
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./pages/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Tasks from "./pages/Tasks/Tasks";
import CreateTask from "./pages/CreateTask/CreateTask";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}  />
          <Route index path="dashboard" element={<Dashboard />}  />
          <Route path="tasks" element={<Tasks />} />
          <Route path="create-task" element={<CreateTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
