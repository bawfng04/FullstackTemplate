import { Route } from "react-router-dom";

//components
import ExampleComponent from "./components/common/ExampleComponent/ExampleComponent";

const routes = (
  <>
    <Route path="*" element={<ExampleComponent />} />
  </>
);

export default routes;
