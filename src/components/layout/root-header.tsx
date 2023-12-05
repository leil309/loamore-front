import { useIsMounted } from '@/hooks/use-is-mounted';
import { useTheme } from 'next-themes';
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdSupervisedUserCircle,
} from 'react-icons/md';
import { RiUser3Fill } from 'react-icons/ri';
const RootHeader = () => {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  return (
    <header className="sticky top-0 z-50">
      <div className="dark: dark:bg-character-dark/70 flex h-16 flex-row justify-between bg-white/70 backdrop-blur-md">
        <div></div>
        <div className="flex items-center">
          <span>검색창</span>
        </div>
        <div className="flex items-center">
          <button className="hidden cursor-pointer px-4 text-xl hover:text-cyan-700 dark:hover:text-cyan-700 md:block">
            {isMounted && theme === 'light' ? (
              <div className="flex" onClick={() => setTheme('dark')}>
                <span className="text-gray-400">
                  <MdOutlineDarkMode />
                </span>
                <div className="mx-2 border-l-2" />
                <MdOutlineLightMode />
              </div>
            ) : (
              <div className="flex" onClick={() => setTheme('light')}>
                <MdOutlineDarkMode />
                <div className="mx-2 border-l-2 border-gray-500" />
                <span className="text-gray-500">
                  <MdOutlineLightMode />
                </span>
              </div>
            )}
          </button>
          <button className="mr-8 hidden cursor-pointer px-4 text-2xl hover:text-cyan-700 dark:hover:text-cyan-700 md:block">
            <RiUser3Fill />
          </button>
        </div>
      </div>
    </header>
  );
};

export default RootHeader;
