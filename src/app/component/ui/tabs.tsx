'use client';

import { cn } from '@/core/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import SearchField from './formUi/SearchField';

type Tab = {
  title: string;
  url: string;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const pathName = usePathname();
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (pathName.endsWith(propTabs[0].url)) {
      setActive(propTabs[0]);
    } else if (pathName.endsWith(propTabs[1].url)) {
      setActive(propTabs[1]);
    } else if (pathName.endsWith(propTabs[2].url)) {
      setActive(propTabs[2]);
    } else if (pathName.endsWith(propTabs[3].url)) {
      setActive(propTabs[3]);
    }
  }, [pathName]);

  return (
    <>
      <div
        className={cn(
          'no-visible-scrollbar relative mt-5 flex h-14 w-full max-w-full flex-row items-center justify-center gap-2 overflow-auto [perspective:1000px] sm:overflow-visible',
          containerClassName
        )}
      >
        <div className="absolute -bottom-[3px] left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        {propTabs.map((tab, idx) => (
          <Link
            href={tab.url}
            key={tab.title}
            className={cn(
              'group relative flex h-full items-center rounded-full px-4 py-2',
              tabClassName
            )}
            style={{
              transformStyle: 'preserve-3d',
            }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 block h-[95%] w-full rounded-md bg-gray-500/20"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            {active.url === tab.url && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                className={cn(
                  'absolute inset-0 top-full h-1 rounded-full bg-gray-200 dark:bg-zinc-800',
                  activeTabClassName
                )}
              />
            )}

            <span className={`relative block px-5`}>{tab.title}</span>
          </Link>
        ))}
        <SearchField />
      </div>
    </>
  );
};
