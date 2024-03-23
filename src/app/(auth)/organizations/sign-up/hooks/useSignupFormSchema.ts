import { useMemo } from 'react';
import { z } from 'zod';

const signUpFormSchema = z.object({
  organizationName: z
    .string({
      required_error: 'Organization name is required',
    })
    .min(1, 'Organization name is required'),
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
