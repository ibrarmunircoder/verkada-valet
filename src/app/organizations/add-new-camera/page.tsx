'use client';

import React from 'react';
import { useAddNewCarmeraForm } from './hooks/useAddNewCameraForm';
import { Controller } from 'react-hook-form';
import { Button, Input } from '@aws-amplify/ui-react';
import { isError, isErrorMessage } from '@/app/shared/utils';
import { ErrorHelperMessage, Spinner } from '@/app/components';

const AddNewCamera = () => {
  const { control, errors, isSubmitting, onSubmit, touchedFields } =
    useAddNewCarmeraForm();

  return (
    <main className="w-full min-h-screen flex justify-center p-3">
      <div className="max-w-2xl w-full my-7 md:my-12">
        <h2 className="text-2xl font-medium text-center mb-5 uppercase">
          Add Camera
        </h2>
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <div>
            <label
              htmlFor="licensePlateNum"
              className="text-lg font-normal mb-2 inline-block"
            >
              Camera Id
            </label>
            <Controller
              control={control}
              name="cameraId"
              render={({ field }) => (
                <Input
                  placeholder=" Camera Id"
                  id="cameraId"
                  type="text"
                  hasError={isError('cameraId', errors, touchedFields)}
                  {...field}
                />
              )}
            />

            <ErrorHelperMessage message={isErrorMessage('cameraId', errors)} />
          </div>

          <Button type="submit" variation="primary" isLoading={isSubmitting}>
            Add
          </Button>
        </form>
      </div>
    </main>
  );
};
export default AddNewCamera;
