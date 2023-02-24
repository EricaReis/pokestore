import Home from "../../presentation/pages/Home/Home.page";
import Example from "../../presentation/pages/Example/Example.page";
import Adoption from "../../presentation/pages/Adoption/Adoption.page";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/example",
    element: <Example />,
  },
  {
    path: "/adoption",
    element: <Adoption />,
  },
];
