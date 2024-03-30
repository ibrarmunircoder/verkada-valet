import { useForm } from 'react-hook-form';
import { SignInFormInput, useSigninFormSchema } from './useSigninFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'aws-amplify/auth';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const useSigninForm = (redirectTo: string) => {
  const router = useRouter();
  const [error, setError] = useState('');
  const validationSchema = useSigninFormSchema();
  const {
    control,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitting },
  } = useForm<SignInFormInput>({
    mode: 'onSubmit',
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = async (values: SignInFormInput) => {
    try {
      await signIn({
        username: values.email,
        password: values.password,
      });
      router.replace(redirectTo);
    } catch (error: any) {
      setError(error?.message || 'Invalid credentials');
      console.error(error);
    }
  };

  const handleCloseError = () => {
    setError('');
  };

  return {
    control,
    onSubmit: handleSubmit(onSubmit),
    errors,
    touchedFields,
    isSubmitting,
    error,
    handleCloseError,
  };
};
