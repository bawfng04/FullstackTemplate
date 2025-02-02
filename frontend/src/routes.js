import { Route } from "react-router-dom";

//components
import NotFound from "./components/common/404/NotFound";

const routes = (
  <>
    <Route path="*" element={<NotFound />} />
  </>
);

export default routes;
