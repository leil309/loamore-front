import {
  MdOutlineAutoGraph,
  MdOutlineCalculate,
  MdOutlineHome,
  MdOutlinePersonOutline,
  MdOutlinePersonSearch,
} from 'react-icons/md';
import { Titillium_Web } from 'next/font/google';
import Link from 'next/link';

const title = Titillium_Web({ weight: ['900'], subsets: ['latin'] });

const menus = [
  { name: '대시보드', icon: <MdOutlineHome />, href: '/' },
  { name: '분석', icon: <MdOutlinePersonSearch />, href: '/compare' },
  { name: '랭킹', icon: <MdOutlineAutoGraph />, href: '/ranking' },
  { name: '각인계산기', icon: <MdOutlineCalculate />, href: '/tools' },
];
const RootMenu = () => {
  return (
    <div className="sticky top-0 z-50 flex max-h-screen min-h-screen flex-1 flex-col justify-between border-r border-gray-200 pt-1.5 dark:border-gray-600">
      <div className="flex flex-col">
        <div className="place-self-center">
          <button
            onClick={() => {}}
            className={`text-character-dark mb-8 mt-1 p-2 text-2xl dark:text-gray-400 ${title.className}`}
          >
            LOA MORE
          </button>
        </div>
        {menus.map((x, index) => {
          return (
            <Link
              key={index}
              className="duration-400 mr-2 flex place-items-center space-x-2.5 rounded-r-xl p-3 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
              href={x.href}
            >
              <span className="text-2xl text-gray-500 dark:text-gray-400">
                {x.icon}
              </span>
              <span>{x.name}</span>
            </Link>
          );
        })}
      </div>
      <div className="mb-3 flex flex-col">
        <button className="duration-400 mr-2 flex place-items-center space-x-2.5 rounded-r-xl p-3 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700">
          <span className="text-sm">기타</span>
        </button>
      </div>
    </div>
  );
};

export default RootMenu;
