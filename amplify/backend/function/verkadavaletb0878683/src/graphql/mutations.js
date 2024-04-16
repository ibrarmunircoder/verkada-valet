export const deleteTickets = /* GraphQL */ `
  mutation DeleteTickets(
    $input: DeleteTicketsInput!
    $condition: ModelTicketsConditionInput
  ) {
    deleteTickets(input: $input, condition: $condition) {
      ticketNum
      cameraId
      organizationName
      slot
      licensePlateNum
      car {
        licensePlateNum
        userId
        username
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
      created_at
      updated_at
      id
      __typename
    }
  }
`;
