import { useForm } from 'react-hook-form';
import { AddNewCarFormInput, useAddNewCarSchema } from './useAddNewCarSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthenticator } from '@aws-amplify/ui-react';
import Swal from 'sweetalert2';
import { carService } from '@/app/shared/services/cars.service';

export const useAddNewCarForm = () => {
  const { user } = useAuthenticator();
  const validationSchema = useAddNewCarSchema();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm<AddNewCarFormInput>({
    mode: 'onSubmit',
    resolver: zodResolver(validationSchema),
    defaultValues: {
      carMaker: '',
      carModel: '',
      color: '',
      licensePlateNum: '',
      year: '',
    },
  });

  const onSubmit = async (values: AddNewCarFormInput) => {
    const toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
    });
    try {
      await carService.addNewUserCar({
        ...values,
        year: +values.year,
        userId: user.userId,
      });
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
