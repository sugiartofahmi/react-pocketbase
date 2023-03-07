import { lazy, Suspense } from "react";
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const ContentLayout = lazy(() => import("./layouts/ContentLayout"));
const Loading = lazy(() => import("./components/Loading"));
const Navbar = lazy(() => import("./components/Navbar"));

import Router from "./router";
const App = () => {
  return (
    <MainLayout>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Router />
        </Suspense>
      </Suspense>
    </MainLayout>
  );
};

export default App;
