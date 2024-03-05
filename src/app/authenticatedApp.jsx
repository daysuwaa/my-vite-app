import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import FullPageSpinner from "src/components/Loaders/FullPageSpinner";
import AppLayout from "src/layout/AppLayout";
import routesList from "src/routes/routesList";

const AuthenticatedApp = () => {
  const routes = routesList.filter((route) => route.isPrivate);

  return (
    <AppLayout>
      <Routes>
        {routes.map(({ component: Element, ...rest }, index) => (
          <Route
            element={
              <Suspense fallback={<FullPageSpinner />}>
                <Element />
              </Suspense>
            }
            {...rest}
            key={`auth-route-${index}`}
          />
        ))}
      </Routes>
    </AppLayout>
  );
};

export default AuthenticatedApp;
