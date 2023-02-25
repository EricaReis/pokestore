import Adoption from 'presentation/pages/Adoption/Adoption.page';
import Example from 'presentation/pages/Example/Example.page';
import Home from 'presentation/pages/Home/Home.page';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/example',
    element: <Example />,
  },
  {
    path: '/adoption',
    element: <Adoption />,
  },
];
