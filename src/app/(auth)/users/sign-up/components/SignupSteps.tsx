'use client';

import { SignupForm } from './SignupForm';
import { AuthSteps, useAuthStep } from '@/app/(auth)/hooks/useAuthStep';
import { ConfirmEmailForm } from '@/app/(auth)/components/confirm-email';
import '@aws-amplify/ui-react/styles.css';

export const SignupSteps = () => {
  const { currentStep } = useAuthStep();

  let currentForm = <SignupForm />;

  if (currentStep === AuthSteps.CONFIRM_SIGN_UP) {
    currentForm = <ConfirmEmailForm />;
  }
  return currentForm;
};
