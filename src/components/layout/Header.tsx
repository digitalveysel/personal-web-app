'use client';

import clsx from 'clsx';
import ThemeButton from '../elements/ThemeButton';
import MenuButton from '../elements/MenuButton';
import Link from 'next/link';

const logo = 'veyseldemirel';

export default function Header() {
  return (
    <header className="flex items-center gap-2 p-6">
      <Link
        href="/"
        id="logo"
        className="font- font-montserrat flex items-center gap-1 text-xl font-bold line-through"
      >
        {logo.split('').map((char, index) => (
          <span key={index} className={clsx({ 'text-foreground-transparent': index < 6 })}>
            {char}
          </span>
        ))}
      </Link>
      <div className="flex grow-1 items-center justify-between">
        <ThemeButton />
        <MenuButton />
      </div>
    </header>
  );
}
