import { useMemo } from 'react';
import { z } from 'zod';

const signUpFormSchema = z.object({
  firstName: z
    .string({
      required_error: 'First Name is required',
    })
    .min(1, 'First Name is required'),
  lastName: z
    .string({
      required_error: 'Last Name is required',
    })
    .min(1, 'Last Name is required'),
  dob: z
    .date({
      required_error: 'Date of birth is required',
    })
    .default(new Date()),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(1, 'Password is required'),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email(),
});

export type SignupFormInput = z.infer<typeof signUpFormSchema>;

export const useSignupFormSchema = () => useMemo(() => signUpFormSchema, []);
