import { CreateCarsInput } from '@/API';
import { createCars } from '@/graphql/mutations';
import { execute } from '../utils';
import { getCars } from '@/graphql/queries';

class CarService {
  public async addNewUserCar(input: CreateCarsInput) {
    const response = await execute(
      {
        statement: createCars,
        name: 'createCars',
      },
      {
        input,
      }
    );

    return response;
  }

  public async getCarByLicensePlateNum(licensePlateNum: string) {
    const car = await execute(
      {
        statement: getCars,
        name: 'getCars',
      },
      {
        licensePlateNum,
      }
    );

    return car;
  }
}
export const carService = new CarService();
