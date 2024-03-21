'use client';
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';

export const AuthenticatorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Authenticator.Provider>{children}</Authenticator.Provider>;
};
