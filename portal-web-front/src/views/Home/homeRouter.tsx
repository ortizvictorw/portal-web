import { Route } from "react-router-dom";
import { Home } from "./Home";

export const homeRouter = () => {
  return <Route path="/" element={<Home />} />;
};
