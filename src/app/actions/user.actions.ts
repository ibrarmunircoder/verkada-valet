import { getUserByUserId } from '@/graphql/queries';
import {
  cookieBasedClient,
  runWithAmplifyServerContext,
} from '../amplify-server';
import { getCurrentUser } from 'aws-amplify/auth/server';
import { cookies } from 'next/headers';

export async function fetchUserByUserId(userId: string) {
  const request = await cookieBasedClient.graphql({
    query: getUserByUserId,
    variables: {
      userId,
    },
  });

  return request.data.getUserByUserId.items[0];
}

export async function getCurrentAuthUser() {
  const currentUser = await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: (contextSpec) => getCurrentUser(contextSpec),
  });

  return currentUser;
}
