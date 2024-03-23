'use client';

import React from 'react';
import { Button } from '@aws-amplify/ui-react';
import { signOut } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import '@aws-amplify/ui-react/styles.css';

const Dashboard = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.replace('/');
  };

  return (
    <div>
      Dashboard
      <Button onClick={handleSignOut} variation="primary">
        Sign out
      </Button>
    </div>
  );
};

export default Dashboard;
