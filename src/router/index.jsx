import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("../views/Home"));
const Task = lazy(() => import("../views/Task"));
const List = lazy(() => import("../views/List"));
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/task" element={<Task />} />
      <Route path="/list" element={<List />} />
    </Routes>
  );
};

export default Router;
