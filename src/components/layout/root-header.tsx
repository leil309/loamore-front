import { useIsMounted } from '@/hooks/use-is-mounted';
import { useTheme } from 'next-themes';
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdSupervisedUserCircle,
} from 'react-icons/md';
import { Titillium_Web } from 'next/font/google';
import { RiUser3Fill } from 'react-icons/ri';

const title = Titillium_Web({ weight: ['700'], subsets: ['latin'] });
const RootHeader = () => {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  return (
    <header className="sticky top-0 z-50">
      <div className="dark: flex flex-row justify-between bg-white/70 backdrop-blur-md dark:bg-dark/70">
        <div className="place-self-center">
          <button
            onClick={() => {}}
            className={`p-2 text-3xl ${title.className}`}
          >
            LOA MORE
          </button>
        </div>

        <div className="flex items-center">
          <button className="hidden cursor-pointer px-4 text-2xl hover:text-cyan-700 dark:hover:text-cyan-700 md:block">
            {isMounted && theme === 'light' ? (
              <MdOutlineDarkMode onClick={() => setTheme('dark')} />
            ) : (
              <MdOutlineLightMode onClick={() => setTheme('light')} />
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
