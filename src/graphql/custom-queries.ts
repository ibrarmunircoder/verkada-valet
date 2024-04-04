/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API';
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTicketsByLicensePlateNumAndCreated_at =
  /* GraphQL */ `query CustomTicketsByLicensePlateNumAndCreated_at(
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
      car {
      licensePlateNum
      userId
      carMaker
      carModel
      color
      year

    }
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
` as GeneratedQuery<
    APITypes.TicketsByLicensePlateNumAndCreated_atQueryVariables,
    APITypes.TicketsByLicensePlateNumAndCreated_atQuery
  >;

export const getTicketsByCameraIdAndCreated_at =
  /* GraphQL */ `query CustomTicketsByCameraIdAndCreated_at(
    $cameraId: String!
    $created_at: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTicketsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ticketsByCameraIdAndCreated_at(
      cameraId: $cameraId
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
        car {
      licensePlateNum
      userId
      username
      carMaker
      carModel
      color
      year

    }
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
  ` as GeneratedQuery<
    APITypes.TicketsByCameraIdAndCreated_atQueryVariables,
    APITypes.TicketsByCameraIdAndCreated_atQuery
  >;

export const customListTickets = /* GraphQL */ `query CustomListTickets(
    $filter: ModelTicketsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        ticketNum
        cameraId
        organizationName
        slot
        car {
      licensePlateNum
      userId
      username
      carMaker
      carModel
      color
      year

    }
        licensePlateNum
        status
        checkIn
        checkOut
        id
        created_at
        updated_at
        __typename
      }
      nextToken
      __typename
    }
  }
  ` as GeneratedQuery<
  APITypes.ListTicketsQueryVariables,
  APITypes.ListTicketsQuery
>;
