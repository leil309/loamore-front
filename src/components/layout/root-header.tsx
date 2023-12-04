import { useIsMounted } from '@/hooks/use-is-mounted';
import { useTheme } from 'next-themes';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
const RootHeader = () => {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  return (
    <header>
      <div className="flex flex-row justify-between p-2">
        <span className="text-2xl text-amber-50">LOA MORE</span>
        {isMounted && theme === 'light' ? (
          <button onClick={() => setTheme('dark')}>
            <MdOutlineDarkMode />
          </button>
        ) : (
          <button onClick={() => setTheme('light')}>
            <MdOutlineLightMode />
          </button>
        )}
      </div>
    </header>
  );
};

export default RootHeader;
