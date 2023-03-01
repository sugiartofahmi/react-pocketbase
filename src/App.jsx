import { lazy, Suspense } from "react";

import Router from "./router";
const App = () => {
  return (
    <Suspense fallback="Loading...">
      <Suspense fallback="Loading...">
        <Router />
      </Suspense>
    </Suspense>
  );
};

export default App;
