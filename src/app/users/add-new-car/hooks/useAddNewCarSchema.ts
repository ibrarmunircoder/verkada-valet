import { useMemo } from 'react';
import { z } from 'zod';

const addNewCarSchema = z.object({
  licensePlateNum: z
    .string({
      required_error: 'Plate Number is required',
    })
    .min(1, 'Plate Number is required'),
  carMaker: z
    .string({
      required_error: 'Car Maker is required',
    })
    .min(1, 'Car Makeris required'),
  carModel: z
    .string({
      required_error: 'Car Model is required',
    })
    .min(1, 'Car Model is required'),
  color: z
    .string({
      required_error: 'Color is required',
    })
    .min(1, 'Color is required'),
  year: z
    .string({
      required_error: 'Year is required',
    })
    .min(4, 'Please add a valid year')
    .refine((value) => /^\d+$/.test(value), {
      message: 'Please add a valid year',
    }),
});

export type AddNewCarFormInput = z.infer<typeof addNewCarSchema>;

export const useAddNewCarSchema = () => useMemo(() => addNewCarSchema, []);
