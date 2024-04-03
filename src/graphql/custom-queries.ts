/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API';
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTicketsByLicensePlateNumber =
  /* GraphQL */ `query CustomTicketsByLicensePlateNum(
    $licensePlateNum: String!
    $sortDirection: ModelSortDirection
    $filter: ModelTicketsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ticketsByLicensePlateNum(
      licensePlateNum: $licensePlateNum
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        ticketNum
        cameraId
        organizationName
        licensePlateNum
        status
        checkIn
        checkOut
        id
        car {
      licensePlateNum
      userId
      carMaker
      carModel
      color
      year
   
    }
        created_at
        updated_at
        __typename
      }
      nextToken
      __typename
    }
  }
  ` as GeneratedQuery<
    APITypes.TicketsByLicensePlateNumQueryVariables,
    APITypes.TicketsByLicensePlateNumQuery
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
