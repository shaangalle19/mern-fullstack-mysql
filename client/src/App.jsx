import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import TaskForm from "./pages/TaskForm";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/NavBar";

import { TaskContextProvider } from "./context/TaskProvider";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">

     <div className="container mx-auto py-4 px-20">
     <NavBar />

      <TaskContextProvider>
        <Routes>
          <Route path="/" element={<TaskPage />} />
          <Route path="/new" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;
