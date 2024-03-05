import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import FullPageSpinner from "src/components/Loaders/FullPageSpinner";
import routesList from "src/routes/routesList";

const UnauthenticatedApp = () => {
  const publicRoutes = routesList.filter((route) => !route.isPrivate);

  return (
    <Routes>
      {publicRoutes.map(({ component: Element, ...rest }, index) => (
        <Route
          element={
            <Suspense fallback={<FullPageSpinner />}>
              <Element />
            </Suspense>
          }
          {...rest}
          key={`unauth-route-${index}`}
        />
      ))}
    </Routes>
  );
};

export default UnauthenticatedApp;
