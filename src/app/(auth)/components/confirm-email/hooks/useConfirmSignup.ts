import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { resendSignUpCode, confirmSignUp, autoSignIn } from 'aws-amplify/auth';
import {
  ConfirmSignupFormType,
  useConfirmSignupFormSchema,
} from './useConfirmSignupSchema';
import { useAuthStep } from '@/app/(auth)/hooks/useAuthStep';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

export const useConfirmSignup = () => {
  const router = useRouter();
  const validationSchema = useConfirmSignupFormSchema();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm<ConfirmSignupFormType>({
    mode: 'onSubmit',
    resolver: zodResolver(validationSchema),
    defaultValues: {
      code: '',
    },
  });
  const { email } = useAuthStep();

  const onSubmit = async (values: ConfirmSignupFormType) => {
    const toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
    });
    try {
      const { isSignUpComplete } = await confirmSignUp({
        confirmationCode: values.code,
        username: email,
      });
      if (isSignUpComplete) {
        await autoSignIn();
        router.replace('/dashboard');
      }
    } catch (error: any) {
      console.error(error);
      toast.fire({
        icon: 'error',
        title: error.message || 'Something went wrong!. Please try again.',
        padding: '10px 20px',
      });
    }
  };

  const handleResendCode = async () => {
    const toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
    });
    try {
      await resendSignUpCode({
        username: email,
      });
      toast.fire({
        icon: 'success',
        title: 'The verfication code sent successfully',
        padding: '10px 20px',
      });
    } catch (error: any) {
      console.error(error);
      toast.fire({
        icon: 'error',
        title: error.message || 'Something went wrong!. Please try again.',
        padding: '10px 20px',
      });
    }
  };

  return {
    control,
    isSubmitting,
    touchedFields,
    errors,
    handleResendCode,
    onSubmit: handleSubmit(onSubmit),
  };
};
