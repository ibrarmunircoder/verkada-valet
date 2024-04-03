import { cookieBasedClient } from '../amplify-server';
import { getCamerasByUserId } from '@/graphql/queries';

export async function fetchCameraByUserId(userId: string) {
  const request = await cookieBasedClient.graphql({
    query: getCamerasByUserId,
    variables: {
      userId,
    },
  });

  return request.data.getCamerasByUserId.items;
}
