import { cookieBasedClient } from '../amplify-server';
import { getCarsByUserId } from '@/graphql/queries';

export async function getUserCarsByUseId(userId: string) {
  const request = await cookieBasedClient.graphql({
    query: getCarsByUserId,
    variables: {
      userId,
    },
  });

  return request.data.getCarsByUserId.items;
}
