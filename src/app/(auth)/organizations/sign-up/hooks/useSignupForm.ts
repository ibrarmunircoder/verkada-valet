import { useForm } from 'react-hook-form';
import { SignupFormInput, useSignupFormSchema } from './useSignupFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUp } from 'aws-amplify/auth';
import { AuthSteps, useAuthStep } from '@/app/(auth)/hooks/useAuthStep';
import { userService } from '@/app/shared/services/user.service';
import { UserRole } from '@/API';
import { useState } from 'react';

export const useSignupForm = () => {
  const [apiError, setApiError] = useState<any>(null);
  const validationSchema = useSignupFormSchema();
  const {
    control,
    handleSubmit,
    formState: { touchedFields, errors, isSubmitting },
  } = useForm<SignupFormInput>({
    mode: 'onSubmit',
    resolver: zodResolver(validationSchema),
    defaultValues: {
      email: '',
      organizationName: '',
      password: '',
    },
  });
  const { setCurrentStep, setEmail } = useAuthStep();

  const onSubmit = async (values: SignupFormInput) => {
    try {
      const { isSignUpComplete, nextStep, userId } = await signUp({
        password: values.password,
        username: values.email,
        options: {
          userAttributes: {},
          autoSignIn: {
            authFlowType: 'USER_SRP_AUTH',
          },
        },
      });

      await userService.createNewUser({
        email: values.email,
        name: values.organizationName,
        userId: userId as string,
        role: UserRole.ORGANIZATION,
      });

      if (!isSignUpComplete) {
        // @ts-ignore
        setCurrentStep(AuthSteps[nextStep.signUpStep]);
        setEmail(values.email);
      }
    } catch (error) {
      console.error(error);
      setApiError(error);
    }
  };

  const handleCloseError = () => {
    setApiError('');
  };

  return {
    control,
    isSubmitting,
    touchedFields,
    errors,
    onSubmit: handleSubmit(onSubmit),
    handleCloseError,
    apiError,
  };
};
