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
