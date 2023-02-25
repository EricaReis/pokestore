import { NotFound } from 'presentation/pages/NotFound/NotFound.page';

export const globalRoutes = [
  {
    path: '*',
    element: <NotFound />,
  },
];
