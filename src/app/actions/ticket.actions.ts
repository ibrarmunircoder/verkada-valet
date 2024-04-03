import { cookieBasedClient } from '../amplify-server';
import { TicketStatus } from '@/API';
import {
  customListTickets,
  getTicketsByLicensePlateNumber,
} from '@/graphql/custom-queries';

export async function fetchUserCurrentTicketsByLicensePlateNum(
  licensePlateNum: string
) {
  if (!licensePlateNum) return [];

  const request = await cookieBasedClient.graphql({
    query: getTicketsByLicensePlateNumber,
    variables: {
      licensePlateNum,
      filter: {
        status: { eq: TicketStatus.IN_PARKING },
      },
    },
  });

  return request.data.ticketsByLicensePlateNum.items;
}

export async function fetchUserPastTicketsByLicensePlateNum(
  licensePlateNum: string
) {
  if (!licensePlateNum) return [];

  const request = await cookieBasedClient.graphql({
    query: getTicketsByLicensePlateNumber,
    variables: {
      licensePlateNum,
      filter: {
        status: { eq: TicketStatus.PICKEDUP },
      },
    },
  });

  return request.data.ticketsByLicensePlateNum.items;
}

export async function fetchCurrentUserTicketsByCameraId(cameraId: string) {
  if (!cameraId) return [];

  const request = await cookieBasedClient.graphql({
    query: customListTickets,
    variables: {
      filter: {
        cameraId: { eq: cameraId },
        status: { eq: TicketStatus.IN_PARKING },
      },
    },
  });

  return request.data.listTickets.items;
}
