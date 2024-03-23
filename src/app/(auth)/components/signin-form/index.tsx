'use client';

import { Alert, Button, Input } from '@aws-amplify/ui-react';
import { useSigninForm } from './hooks/useSigninForm';
import { isError, isErrorMessage } from '@/app/shared/utils';
import { Controller } from 'react-hook-form';
import { ErrorHelperMessage } from '@/app/components';
import Link from 'next/link';
import '@aws-amplify/ui-react/styles.css';

export const SigninForm = ({
  parent,
}: {
  parent: 'users' | 'organizations';
}) => {
  const {
    control,
    errors,
    isSubmitting,
    onSubmit,
    touchedFields,
    error,
    handleCloseError,
  } = useSigninForm();

  return (
    <main className="w-full min-h-screen flex justify-center items-center p-3">
      <div className="max-w-2xl w-full">
        <div className="border border-black p-5 shadow-md w-full md:w-3/4 mx-auto">
          <h2 className="text-2xl font-medium text-center mb-5 uppercase">
            Sign in
          </h2>
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="email"
                className="text-lg font-normal mb-2 inline-block"
              >
                Email
              </label>
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <Input
                    placeholder="Enter your email"
                    id="email"
                    type="email"
                    hasError={isError('email', errors, touchedFields)}
                    {...field}
                  />
                )}
              />

              <ErrorHelperMessage message={isErrorMessage('email', errors)} />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-lg font-normal mb-2 inline-block"
              >
                Password
              </label>
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <Input
                    id="password"
                    placeholder="Enter your password"
                    type="password"
                    hasError={isError('password', errors, touchedFields)}
                    {...field}
                  />
                )}
              />

              <ErrorHelperMessage
                message={isErrorMessage('password', errors)}
              />
            </div>
            <Button type="submit" isLoading={isSubmitting} variation="primary">
              Sign in
            </Button>
            {error && (
              <Alert
                variation="error"
                isDismissible
                hasIcon
                onClick={handleCloseError}
              >
                {error}
              </Alert>
            )}
            <div className="flex justify-center gap-2 items-center">
              <span>Don&apos;t have an account?</span>
              <Link
                className="text-primary"
                href={
                  parent === 'users'
                    ? '/users/sign-up'
                    : '/organizations/sign-up'
                }
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
