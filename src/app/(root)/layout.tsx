'use client';
import RootHeader from '@/components/layout/root-header';
import RootMenu from '@/components/layout/root-menu';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dark:bg-dark bg-amber-200">
      <div className="max-w-screen-4xl relative flex min-h-screen justify-between">
        <aside>
          <div>
            <RootMenu />
          </div>
        </aside>
        <div className="flex flex-1 flex-col">
          <RootHeader />
          <div className="bg-body flex flex-1 flex-row">{children}</div>
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
