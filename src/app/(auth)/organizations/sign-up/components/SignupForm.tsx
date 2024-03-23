import { Controller } from 'react-hook-form';
import { useSignupForm } from '../hooks/useSignupForm';
import { Alert, Button, Input } from '@aws-amplify/ui-react';
import {
  formatErrorMessage,
  isError,
  isErrorMessage,
} from '@/app/shared/utils';
import { ErrorHelperMessage } from '@/app/components';
import Link from 'next/link';

export const SignupForm = () => {
  const {
    control,
    errors,
    isSubmitting,
    onSubmit,
    touchedFields,
    apiError,
    handleCloseError,
  } = useSignupForm();
  return (
    <div className="max-w-2xl w-full">
      <div className="border border-black p-5 shadow-md w-full md:w-3/4 mx-auto">
        <h2 className="text-2xl font-medium text-center mb-5 uppercase">
          Sign up
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
              htmlFor="organizationName"
              className="text-lg font-normal mb-2 inline-block"
            >
              Organization Name
            </label>
            <Controller
              control={control}
              name="organizationName"
              render={({ field }) => (
                <Input
                  placeholder="Enter your Organization Name"
                  id="organizationName"
                  type="text"
                  hasError={isError('organizationName', errors, touchedFields)}
                  {...field}
                />
              )}
            />

            <ErrorHelperMessage
              message={isErrorMessage('organizationName', errors)}
            />
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

            <ErrorHelperMessage message={isErrorMessage('password', errors)} />
          </div>
          <Button type="submit" isLoading={isSubmitting} variation="primary">
            Sign up
          </Button>
          {apiError && (
            <Alert
              variation="error"
              isDismissible
              hasIcon
              onClick={handleCloseError}
            >
              {formatErrorMessage(apiError)}
            </Alert>
          )}
          <div className="flex justify-center gap-2 items-center">
            <span>Already have an account?</span>
            <Link className="text-primary" href="/organizations/sign-in">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
