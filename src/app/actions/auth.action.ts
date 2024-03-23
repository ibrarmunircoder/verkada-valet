import { runWithAmplifyServerContext } from '@/app/amplify-server';
import { fetchAuthSession } from 'aws-amplify/auth/server';
import { cookies } from 'next/headers';

export const getServerSession = async () => {
  const userSession = await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);
        return session;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  });

  return userSession;
};
