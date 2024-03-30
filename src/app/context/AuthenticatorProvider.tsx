'use client';

import { Authenticator } from '@aws-amplify/ui-react';
import React from 'react';

export const AuthenticatorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Authenticator.Provider>{children}</Authenticator.Provider>;
};
