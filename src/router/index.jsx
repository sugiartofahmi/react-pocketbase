import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("../views/Home"));
const Attendance = lazy(() => import("../views/Attendance"));
const List = lazy(() => import("../views/List"));
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/list" element={<List />} />
    </Routes>
  );
};

export default Router;
