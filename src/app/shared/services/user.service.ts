import { CreateUsersInput, Users } from '@/API';
import { createUsers } from '@/graphql/mutations';
import { execute } from '@/app/shared/utils';
import { getUserByUserId } from '@/graphql/queries';

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

  async fetchUserById(id: string): Promise<Users> {
    const user = await execute(
      {
        statement: getUserByUserId,
        name: 'getUserByUserId',
      },
      {
        userId: id,
      }
    );
    return user.items[0];
  }
}

export const userService = new UserService();
