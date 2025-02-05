import { Route } from "react-router-dom";

//components
import ExampleComponent from "./components/specific/ExampleComponent/ExampleComponent";
import NotFound from "./components/specific/NotFound/NotFound";
import Unauthorized from "./components/specific/Unauthorized/Unauthorized";
import Homepage from "./components/specific/Homepage/Homepage";

const routes = (
  <>
    <Route path="/" element={<Homepage />} />
    <Route path="/home" element={<Homepage />} />
    <Route path="/example" element={<ExampleComponent />} />
    <Route path="/unauthorized" element={<Unauthorized />} />
    <Route path="*" element={<NotFound />} />
  </>
);

export default routes;
