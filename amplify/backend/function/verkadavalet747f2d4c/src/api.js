import { createTickets } from './graphql/mutations.js';
import { getCameras } from './graphql/queries.js';
import { executeRequest } from './helpers.js';

export const createNewTicket = async (input) => {
  const ticket = await executeRequest(
    {
      name: 'createTickets',
      query: createTickets,
    },
    {
      input,
    }
  );

  return ticket;
};

export const getCameraById = async (cameraId) => {
  const camera = await executeRequest(
    {
      query: getCameras,
      name: 'getCameras',
    },
    {
      cameraId,
    }
  );

  return camera;
};
