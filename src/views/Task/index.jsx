import { lazy } from "react";
const ContentLayout = lazy(() => import("../../layouts/ContentLayout"));
const Task = () => {
  document.title = "TASKU | Task";
  return (
    <ContentLayout>
      <h1>Attendance</h1>
    </ContentLayout>
  );
};

export default Task;
