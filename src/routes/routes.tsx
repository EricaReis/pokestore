import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Example from "../pages/Example/Example";
import Adoption from "../pages/Adoption/Adoption";

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/example" element={<Example />} />
          <Route path="/adoption" element={<Adoption />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
