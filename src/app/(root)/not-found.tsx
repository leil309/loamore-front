import React from 'react';
import Link from 'next/link';

import {
  MdOutlineAutoGraph,
  MdOutlineCalculate,
  MdOutlineDarkMode,
  MdOutlineHome,
  MdOutlineLightMode,
  MdOutlinePersonSearch,
} from 'react-icons/md';
import { Titillium_Web } from 'next/font/google';
import { RiUser3Fill } from 'react-icons/ri';
import { useTheme } from 'next-themes';
import { useIsMounted } from '@/hooks/use-is-mounted';

const title = Titillium_Web({ weight: ['900'], subsets: ['latin'] });

const menus = [
  { name: '대시보드', icon: <MdOutlineHome />, href: '/' },
  { name: '분석', icon: <MdOutlinePersonSearch />, href: '/compare' },
  { name: '랭킹', icon: <MdOutlineAutoGraph />, href: '/ranking' },
  { name: '각인계산기', icon: <MdOutlineCalculate />, href: '/tools' },
];
export default async function NotFound() {
  return (
    <div className="bg-white dark:bg-dark">
      <div className="relative flex h-screen max-w-screen-4xl justify-between">
        <div>
          <div className="sticky top-0 z-50 flex max-h-screen min-h-screen flex-1 flex-col justify-between border-r border-gray-200 pt-1.5 dark:border-gray-600">
            <div className="flex flex-col">
              <div className="place-self-center">
                <button
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
        </div>
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-50">
            <div className="dark: dark:bg-character-dark/70 flex h-16 flex-row justify-between bg-white/70 backdrop-blur-md">
              <div></div>
              <div className="flex items-center">
                <span>검색창</span>
              </div>
              <div className="flex items-center">
                <button className="hidden cursor-pointer px-4 text-xl md:block">
                  <div className="flex">
                    <MdOutlineDarkMode className="text-gray-400 dark:text-gray-300" />
                    <div className="mx-2 border-l-2 dark:border-gray-500" />
                    <span className="dark:text-gray-500">
                      <MdOutlineLightMode />
                    </span>
                  </div>
                </button>
                <button className="mr-8 hidden cursor-pointer px-4 text-2xl md:block">
                  <RiUser3Fill />
                </button>
              </div>
            </div>
          </header>
          <div className="flex flex-1 flex-row bg-body dark:bg-body-dark">
            <main className="m-auto flex flex-col p-5 pl-0">
              <span className="mx-auto text-3xl font-bold text-gray-600 dark:text-gray-400">
                404
              </span>
              <span className="text-3xl font-bold text-gray-600 dark:text-gray-400">
                존재하지 않는 페이지 입니다.
              </span>
            </main>
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
}
