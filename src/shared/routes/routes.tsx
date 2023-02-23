import Home from "../../presentation/pages/Home/Home";
import Example from "../../presentation/pages/Example/Example";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adoption from "../../presentation/pages/Adoption/Adoption";

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
