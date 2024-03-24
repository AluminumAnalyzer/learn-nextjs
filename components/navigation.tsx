'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from '../styles/navigation.module.css';

const MainNavigation = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href="/">{pathname === '/' ? 'Home🔥' : 'Home'}</Link>
        </li>
        <li>
          <Link href="/about-us">
            {pathname === '/about-us' ? 'About Us 🔥' : 'About Us'}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
