import { CreateCarsInput } from '@/API';
import { createCars } from '@/graphql/mutations';
import { execute } from '../utils';

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
}
export const carService = new CarService();
