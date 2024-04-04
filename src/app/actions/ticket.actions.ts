import { cookieBasedClient } from '../amplify-server';
import { ModelSortDirection, TicketStatus } from '@/API';
import {
  getTicketsByCameraIdAndCreated_at,
  getTicketsByLicensePlateNumAndCreated_at,
} from '@/graphql/custom-queries';

export async function fetchUserCurrentTicketsByLicensePlateNum(
  licensePlateNum: string
) {
  if (!licensePlateNum) return [];
  const request = await cookieBasedClient.graphql({
    query: getTicketsByLicensePlateNumAndCreated_at,
    variables: {
      licensePlateNum,
      filter: {
        status: { eq: TicketStatus.IN_PARKING },
      },
    },
  });
  return request.data.ticketsByLicensePlateNumAndCreated_at.items;
}

export async function fetchUserPastTicketsByLicensePlateNum(
  licensePlateNum: string
) {
  if (!licensePlateNum) return [];

  const request = await cookieBasedClient.graphql({
    query: getTicketsByLicensePlateNumAndCreated_at,
    variables: {
      licensePlateNum,
      sortDirection: ModelSortDirection.DESC,
      filter: {
        status: { eq: TicketStatus.PICKEDUP },
      },
    },
  });
  return request.data.ticketsByLicensePlateNumAndCreated_at.items;
}

export async function fetchCurrentUserTicketsByCameraId(cameraId: string) {
  if (!cameraId) return [];

  const request = await cookieBasedClient.graphql({
    query: getTicketsByCameraIdAndCreated_at,
    variables: {
      cameraId,
      filter: {
        status: { eq: TicketStatus.IN_PARKING },
      },
    },
  });

  return request.data.ticketsByCameraIdAndCreated_at.items;
}

export async function fetchPastUserTicketsByCameraId(cameraId: string) {
  if (!cameraId) return [];

  const request = await cookieBasedClient.graphql({
    query: getTicketsByCameraIdAndCreated_at,
    variables: {
      cameraId,
      sortDirection: ModelSortDirection.DESC,
      filter: {
        status: { eq: TicketStatus.PICKEDUP },
      },
    },
  });

  return request.data.ticketsByCameraIdAndCreated_at.items;
}
