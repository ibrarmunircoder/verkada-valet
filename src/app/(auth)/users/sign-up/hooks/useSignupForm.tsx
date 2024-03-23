import { useForm } from 'react-hook-form';
import { SignupFormInput, useSignupFormSchema } from './useSignupFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUp } from 'aws-amplify/auth';
import { userService } from '@/app/shared/services/user.service';
import { AuthSteps, useAuthStep } from '@/app/(auth)/hooks/useAuthStep';
import { formatDob } from '@/app/shared/utils';
import { useState } from 'react';
import { UserRole } from '@/API';

export const useSignupForm = () => {
  const [apiError, setApiError] = useState<any>(null);
  const validationSchema = useSignupFormSchema();
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { touchedFields, errors, isSubmitting },
  } = useForm<SignupFormInput>({
    mode: 'onSubmit',
    resolver: zodResolver(validationSchema),
    defaultValues: {
      dob: new Date(),
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    },
  });
  const { setCurrentStep, setEmail } = useAuthStep();

  const dob = watch('dob');

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
        dob: formatDob(values.dob),
        email: values.email,
        name: `${values.firstName}-${values.lastName}`,
        userId: userId as string,
        role: UserRole.USER,
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

  const handleDobChange = (newDate: Date) => {
    setValue('dob', newDate);
  };

  const handleCloseError = () => {
    setApiError('');
  };

  return {
    dob,
    control,
    isSubmitting,
    touchedFields,
    errors,
    onSubmit: handleSubmit(onSubmit),
    handleDobChange,
    handleCloseError,
    apiError,
  };
};
