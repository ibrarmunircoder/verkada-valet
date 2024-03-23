import { CreateUsersInput } from '@/API';
import { createUsers } from '@/graphql/mutations';
import { execute } from '@/app/shared/utils';

class UserService {
  public async createNewUser(input: CreateUsersInput) {
    const user = await execute(
      {
        statement: createUsers,
        name: 'createUsers',
      },
      {
        input,
      },
      'iam'
    );

    return user;
  }
}

export const userService = new UserService();
