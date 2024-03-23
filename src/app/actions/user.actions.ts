import { getUserByUserId } from '@/graphql/queries';
import { cookieBasedClient } from '../amplify-server';

export async function fetchUserByUserId(userId: string) {
  const request = await cookieBasedClient.graphql({
    query: getUserByUserId,
    variables: {
      userId,
    },
  });

  return request.data.getUserByUserId.items[0];
}
