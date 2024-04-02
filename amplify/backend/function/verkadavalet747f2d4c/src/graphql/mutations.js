export const createTickets = /* GraphQL */ `
  mutation CreateTickets(
    $input: CreateTicketsInput!
    $condition: ModelTicketsConditionInput
  ) {
    createTickets(input: $input, condition: $condition) {
      ticketNum
      cameraId
      organizationName
      licensePlateNum
      car {
        licensePlateNum
        userId
        carMaker
        carModel
        color
        year
        created_at
        updated_at
        __typename
      }
      status
      checkIn
      checkOut
      id
      created_at
      updated_at
      __typename
    }
  }
`;
