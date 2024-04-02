import { useForm } from 'react-hook-form';
import {
  AddNewCameraFormInput,
  useAddNewCameraSchema,
} from './useAddNewCameraSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Swal from 'sweetalert2';
import { userService } from '@/app/shared/services/user.service';
import { cameraService } from '@/app/shared/services/camera.service';
import { getCurrentUser } from 'aws-amplify/auth';

export const useAddNewCarmeraForm = () => {
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
      const user = await getCurrentUser();
      const dbUser = await userService.fetchUserById(user.userId);
      await cameraService.createNewCamera({
        cameraId: values.cameraId,
        organizationName: dbUser.name,
        userId: user.userId,
      });
      toast.fire({
        icon: 'success',
        title: 'your camera added successfully',
        padding: '10px 20px',
      });
      reset();
    } catch (error: any) {
      toast.fire({
        icon: 'error',
        title: error.message || 'Failed to add camera',
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
