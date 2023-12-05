'use client';
import RootHeader from '@/components/layout/root-header';
import RootMenu from '@/components/layout/root-menu';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white dark:bg-dark">
      <div className="relative flex min-h-screen max-w-screen-4xl justify-between">
        <div className="flex flex-col bg-body pr-2 dark:bg-body-dark">
          <RootMenu />
        </div>

        <div className="flex flex-1 flex-col">
          <RootHeader />
          <div className="flex flex-1 flex-row bg-body dark:bg-body-dark">
            {children}
          </div>
          <footer>
            <div>
              <span>footer</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
export default Layout;
