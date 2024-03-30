import { Button, Input } from '@aws-amplify/ui-react';
import { Controller } from 'react-hook-form';
import { ErrorHelperMessage } from '@/app/components';
import { isError, isErrorMessage } from '@/app/shared/utils';
import { useConfirmSignup } from './hooks/useConfirmSignup';

export const ConfirmEmailForm = ({ redirectTo }: { redirectTo: string }) => {
  const {
    control,
    errors,
    isSubmitting,
    touchedFields,
    onSubmit,
    handleResendCode,
  } = useConfirmSignup(redirectTo);
  return (
    <div className="max-w-2xl w-full">
      <div className="border border-black p-5 py-10 shadow-md w-full md:w-3/4 mx-auto">
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <h2 className="text-2xl font-semibold text-left mb-2">
            We Emailed You
          </h2>
          <p>
            Your code is on the way. To log in, enter the code we sent you. It
            may take a minute to arrive.
          </p>

          <div>
            <label
              htmlFor="code"
              className="text-lg font-normal mb-2 inline-block"
            >
              Enter Confirmation Code
            </label>
            <Controller
              control={control}
              name="code"
              render={({ field }) => (
                <Input
                  placeholder="Enter your code"
                  id="code"
                  type="text"
                  hasError={isError('code', errors, touchedFields)}
                  {...field}
                />
              )}
            />

            <ErrorHelperMessage message={isErrorMessage('code', errors)} />
          </div>
          <Button type="submit" variation="primary" isLoading={isSubmitting}>
            Confirm
          </Button>
          <Button onClick={handleResendCode} type="button">
            Resend Code
          </Button>
          <p>Be sure to check your spam or junk folder.</p>
        </form>
      </div>
    </div>
  );
};
