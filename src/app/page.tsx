'use client';

import { Button } from '@aws-amplify/ui-react';
import Link from 'next/link';
import '@aws-amplify/ui-react/styles.css';

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen p-4">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Verkada Valet
        </h1>
        <div className="flex flex-row gap-3 md:gap-5">
          <Link href="/users/sign-in">
            <Button>
              <div className="flex flex-col items-center text-xs sm:text-sm">
                <span>Users</span>
                <span>Sign in / Sign up</span>
              </div>
            </Button>
          </Link>
          <Link href="/organizations/sign-in">
            <Button>
              <div className="flex flex-col items-center text-xs sm:text-sm">
                <span>Organizations</span>
                <span>Sign in / Sign up</span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
