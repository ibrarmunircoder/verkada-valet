import { useMemo } from 'react';
import { z } from 'zod';

const addNewCameraSchema = z.object({
  cameraId: z
    .string({
      required_error: 'Camera Id is required',
    })
    .min(1, 'Camera Id is required'),
});

export type AddNewCameraFormInput = z.infer<typeof addNewCameraSchema>;

export const useAddNewCameraSchema = () =>
  useMemo(() => addNewCameraSchema, []);
