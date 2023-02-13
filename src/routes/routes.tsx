import Home from "../pages/Home/Home";
import Example from "../pages/Example/Example";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/example" element={<Example />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
