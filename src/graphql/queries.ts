/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUsers = /* GraphQL */ `query GetUsers($email: String!) {
  getUsers(email: $email) {
    email
    userId
    role
    name
    dob
    created_at
    updated_at
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUsersQueryVariables, APITypes.GetUsersQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $email: String
  $filter: ModelUsersFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUsers(
    email: $email
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      email
      userId
      role
      name
      dob
      created_at
      updated_at
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getUserByUserId = /* GraphQL */ `query GetUserByUserId(
  $userId: String!
  $sortDirection: ModelSortDirection
  $filter: ModelUsersFilterInput
  $limit: Int
  $nextToken: String
) {
  getUserByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      email
      userId
      role
      name
      dob
      created_at
      updated_at
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserByUserIdQueryVariables,
  APITypes.GetUserByUserIdQuery
>;
export const getCars = /* GraphQL */ `query GetCars($licensePlateNum: String!) {
  getCars(licensePlateNum: $licensePlateNum) {
    licensePlateNum
    userId
    username
    carMaker
    carModel
    color
    year
    tickets {
      nextToken
      __typename
    }
    created_at
    updated_at
    __typename
  }
}
` as GeneratedQuery<APITypes.GetCarsQueryVariables, APITypes.GetCarsQuery>;
export const listCars = /* GraphQL */ `query ListCars(
  $licensePlateNum: String
  $filter: ModelCarsFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCars(
    licensePlateNum: $licensePlateNum
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListCarsQueryVariables, APITypes.ListCarsQuery>;
export const getCarsByUserId = /* GraphQL */ `query GetCarsByUserId(
  $userId: String!
  $sortDirection: ModelSortDirection
  $filter: ModelCarsFilterInput
  $limit: Int
  $nextToken: String
) {
  getCarsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCarsByUserIdQueryVariables,
  APITypes.GetCarsByUserIdQuery
>;
export const getCameras = /* GraphQL */ `query GetCameras($cameraId: String!) {
  getCameras(cameraId: $cameraId) {
    cameraId
    userId
    organizationName
    created_at
    updated_at
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCamerasQueryVariables,
  APITypes.GetCamerasQuery
>;
export const listCameras = /* GraphQL */ `query ListCameras(
  $cameraId: String
  $filter: ModelCamerasFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCameras(
    cameraId: $cameraId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      cameraId
      userId
      organizationName
      created_at
      updated_at
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCamerasQueryVariables,
  APITypes.ListCamerasQuery
>;
export const getCamerasByUserId = /* GraphQL */ `query GetCamerasByUserId(
  $userId: String!
  $sortDirection: ModelSortDirection
  $filter: ModelCamerasFilterInput
  $limit: Int
  $nextToken: String
) {
  getCamerasByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      cameraId
      userId
      organizationName
      created_at
      updated_at
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCamerasByUserIdQueryVariables,
  APITypes.GetCamerasByUserIdQuery
>;
export const getTickets = /* GraphQL */ `query GetTickets($id: ID!) {
  getTickets(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetTicketsQueryVariables,
  APITypes.GetTicketsQuery
>;
export const listTickets = /* GraphQL */ `query ListTickets(
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
  APITypes.ListTicketsQueryVariables,
  APITypes.ListTicketsQuery
>;
export const ticketsByCameraIdAndCreated_at = /* GraphQL */ `query TicketsByCameraIdAndCreated_at(
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
export const ticketsByLicensePlateNumAndCreated_at = /* GraphQL */ `query TicketsByLicensePlateNumAndCreated_at(
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
` as GeneratedQuery<
  APITypes.TicketsByLicensePlateNumAndCreated_atQueryVariables,
  APITypes.TicketsByLicensePlateNumAndCreated_atQuery
>;
