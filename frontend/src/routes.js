import { Route } from "react-router-dom";

//components
import ExampleComponent from "./components/common/ExampleComponent/ExampleComponent";
import NotFound from "./components/common/NotFound/NotFound";
import Unauthorized from "./components/common/Unauthorized/Unauthorized";

const routes = (
  <>
    <Route path="/example" element={<ExampleComponent />} />
    <Route path="/unauthorized" element={<Unauthorized />} />
    <Route path="*" element={<NotFound />} />
  </>
);

export default routes;
