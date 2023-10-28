'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const currentPath = usePathname();
  console.log(currentPath);
  const links = [
    {
      id: 0,
      to: '/dashboard',
      name: 'dashboard',
    },
    {
      id: 1,
      to: '/issues',
      name: 'issues',
    },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center ">
      <Link href="/">Logo</Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={link.to}
              className="text-zinc-800 hover:text-zinc-500 transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
