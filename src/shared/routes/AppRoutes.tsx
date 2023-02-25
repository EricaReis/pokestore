import { useRef } from 'react';

import { useRoutes } from 'react-router-dom';

import Header from 'presentation/components/base/Header/Header.component';

import { appRoutes } from './index.routes';

export function AppRoutes(): JSX.Element {
  const headerRef = useRef(null);
  const routes = useRoutes(appRoutes);

  return (
    <>
      <div ref={headerRef}>
        <Header />
      </div>
      <>{routes}</>
    </>
  );
}
