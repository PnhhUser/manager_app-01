import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/dashboard/dashboard";
import { LOCATION_TABLE_PATH } from "./common/constants/path";

function Router() {
  const routerApp = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route path="/" element={<App />}>
          <Route path={LOCATION_TABLE_PATH} element={<Dashboard />} />
          <Route
            path={`${LOCATION_TABLE_PATH}/:tableId`}
            element={<Dashboard />}
          />
        </Route>
      </>
    )
  );
  return <RouterProvider router={routerApp} />;
}

export default Router;
