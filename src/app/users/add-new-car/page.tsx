'use client';

import React from 'react';
import { useAddNewCarForm } from './hooks/useAddNewCarForm';
import { Controller } from 'react-hook-form';
import { Button, Input, useAuthenticator } from '@aws-amplify/ui-react';
import { isError, isErrorMessage } from '@/app/shared/utils';
import { ErrorHelperMessage, Spinner } from '@/app/components';

const AddNewCar = () => {
  const { authStatus } = useAuthenticator();
  const { control, errors, isSubmitting, onSubmit, touchedFields } =
    useAddNewCarForm();

  if (authStatus === 'configuring') {
    return <Spinner />;
  }

  return (
    <main className="w-full min-h-screen flex justify-center p-3">
      <div className="max-w-2xl w-full my-7 md:my-12">
        <h2 className="text-2xl font-medium text-center mb-5 uppercase">
          Add Car to Profile
        </h2>
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <div>
            <label
              htmlFor="licensePlateNum"
              className="text-lg font-normal mb-2 inline-block"
            >
              License Plate Number
            </label>
            <Controller
              control={control}
              name="licensePlateNum"
              render={({ field }) => (
                <Input
                  placeholder="License Plate Number"
                  id="licensePlateNum"
                  type="text"
                  hasError={isError('licensePlateNum', errors, touchedFields)}
                  {...field}
                />
              )}
            />

            <ErrorHelperMessage
              message={isErrorMessage('licensePlateNum', errors)}
            />
          </div>

          <div>
            <label
              htmlFor="carMaker"
              className="text-lg font-normal mb-2 inline-block"
            >
              Car Maker
            </label>
            <Controller
              control={control}
              name="carMaker"
              render={({ field }) => (
                <Input
                  placeholder="Car Maker"
                  id="carMaker"
                  type="text"
                  hasError={isError('carMaker', errors, touchedFields)}
                  {...field}
                />
              )}
            />

            <ErrorHelperMessage message={isErrorMessage('carMaker', errors)} />
          </div>

          <div>
            <label
              htmlFor="carModel"
              className="text-lg font-normal mb-2 inline-block"
            >
              Car Model
            </label>
            <Controller
              control={control}
              name="carModel"
              render={({ field }) => (
                <Input
                  placeholder="Car Model"
                  id="carModel"
                  type="text"
                  hasError={isError('carModel', errors, touchedFields)}
                  {...field}
                />
              )}
            />

            <ErrorHelperMessage message={isErrorMessage('carModel', errors)} />
          </div>

          <div>
            <label
              htmlFor="color"
              className="text-lg font-normal mb-2 inline-block"
            >
              Color
            </label>
            <Controller
              control={control}
              name="color"
              render={({ field }) => (
                <Input
                  placeholder="Color"
                  id="color"
                  type="text"
                  hasError={isError('color', errors, touchedFields)}
                  {...field}
                />
              )}
            />

            <ErrorHelperMessage message={isErrorMessage('color', errors)} />
          </div>

          <div>
            <label
              htmlFor="year"
              className="text-lg font-normal mb-2 inline-block"
            >
              Year
            </label>
            <Controller
              control={control}
              name="year"
              render={({ field }) => (
                <Input
                  placeholder="Year"
                  id="year"
                  type="text"
                  hasError={isError('year', errors, touchedFields)}
                  {...field}
                />
              )}
            />

            <ErrorHelperMessage message={isErrorMessage('year', errors)} />
          </div>

          <Button type="submit" variation="primary" isLoading={isSubmitting}>
            Submit
          </Button>
        </form>
      </div>
    </main>
  );
};
export default AddNewCar;
