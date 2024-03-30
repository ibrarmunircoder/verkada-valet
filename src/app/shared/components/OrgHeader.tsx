'use client';

import { Button } from '@aws-amplify/ui-react';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { signOut } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import '@aws-amplify/ui-react/styles.css';

const navLinks = [
  { label: 'Current Tickets', href: '/organizations/tickets', content: null },
  {
    label: 'Ticket History',
    href: '/organizations/tickets-history',
    content: null,
  },
  { label: 'Add Camera', href: '/organizations/add-new-camera', content: null },
];

export const OrgHeader = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.replace('/');
  };

  return (
    <header className="px-12 py-4 w-full shadow-lg">
      <nav className="w-full overflow-hidden flex justify-between items-center">
        <div />
        <ul className="flex items-center gap-4">
          {navLinks.map((link, index) => (
            <li
              className={
                pathname === link.href
                  ? 'font-semibold text-primary underline underline-offset-8 decoration-2'
                  : ''
              }
              key={index}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <Button onClick={handleSignOut} variation="link">
          Sign Out
        </Button>
      </nav>
    </header>
  );
};
