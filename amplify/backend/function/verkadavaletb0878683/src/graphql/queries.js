export const getCameras = /* GraphQL */ `
  query GetCameras($cameraId: String!) {
    getCameras(cameraId: $cameraId) {
      cameraId
      userId
      organizationName
      created_at
      updated_at
      __typename
    }
  }
`;

export const ticketsByLicensePlateNumAndCreated_at = /* GraphQL */ `
  query TicketsByLicensePlateNumAndCreated_at(
    $licensePlateNum: String!
    $created_at: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTicketsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ticketsByLicensePlateNumAndCreated_at(
      licensePlateNum: $licensePlateNum
      created_at: $created_at
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        ticketNum
        cameraId
        organizationName
        slot
        licensePlateNum
        status
        checkIn
        checkOut
        created_at
        updated_at
        id
        __typename
      }
      nextToken
      __typename
    }
  }
`;
