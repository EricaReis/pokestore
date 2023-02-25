import { useRef } from 'react';
import { useRoutes } from 'react-router-dom';
import Navbar from 'presentation/components/base/Navbar/Navbar';
import { appRoutes } from './index.routes';

export function AppRoutes(): JSX.Element {
  const headerRef = useRef(null);
  const routes = useRoutes(appRoutes);

  return (
    <>
      <div ref={headerRef}>
        <Navbar />
      </div>
      <>{routes}</>
    </>
  );
}
