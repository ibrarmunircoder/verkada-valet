import { deleteTickets } from './graphql/mutations.js';
import {
  getCameras,
  ticketsByLicensePlateNumAndCreated_at,
} from './graphql/queries.js';
import { executeRequest } from './helpers.js';

export const deleteTicket = async (id) => {
  const ticket = await executeRequest(
    {
      query: deleteTickets,
      name: 'deleteTickets',
    },
    {
      input: {
        id,
      },
    }
  );

  return ticket;
};

export const getTicketByLicensePlateNum = async (licensePlateNum) => {
  const ticket = await executeRequest(
    {
      query: ticketsByLicensePlateNumAndCreated_at,
      name: 'ticketsByLicensePlateNumAndCreated_at',
    },
    {
      licensePlateNum,
      filter: {
        status: { eq: 'IN_PARKING' },
      },
    }
  );

  return ticket.items?.length ? ticket.items[0] : null;
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
