import { useForm } from 'react-hook-form';
import {
  AddNewCameraFormInput,
  useAddNewCameraSchema,
} from './useAddNewCameraSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthenticator } from '@aws-amplify/ui-react';
import Swal from 'sweetalert2';

export const useAddNewCarmeraForm = () => {
  const { user } = useAuthenticator();
  const validationSchema = useAddNewCameraSchema();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm<AddNewCameraFormInput>({
    mode: 'onSubmit',
    resolver: zodResolver(validationSchema),
    defaultValues: {
      cameraId: '',
    },
  });

  const onSubmit = async (values: AddNewCameraFormInput) => {
    const toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
    });
    try {
      toast.fire({
        icon: 'success',
        title: 'your car added successfully',
        padding: '10px 20px',
      });
      reset();
    } catch (error: any) {
      toast.fire({
        icon: 'error',
        title: error.message || 'Failed to add car',
        padding: '10px 20px',
      });
    }
  };

  return {
    control,
    errors,
    isSubmitting,
    touchedFields,
    onSubmit: handleSubmit(onSubmit),
  };
};
