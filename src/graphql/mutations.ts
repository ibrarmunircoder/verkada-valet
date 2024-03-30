/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUsers = /* GraphQL */ `mutation CreateUsers(
  $input: CreateUsersInput!
  $condition: ModelUsersConditionInput
) {
  createUsers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUsersMutationVariables,
  APITypes.CreateUsersMutation
>;
export const updateUsers = /* GraphQL */ `mutation UpdateUsers(
  $input: UpdateUsersInput!
  $condition: ModelUsersConditionInput
) {
  updateUsers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUsersMutationVariables,
  APITypes.UpdateUsersMutation
>;
export const deleteUsers = /* GraphQL */ `mutation DeleteUsers(
  $input: DeleteUsersInput!
  $condition: ModelUsersConditionInput
) {
  deleteUsers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUsersMutationVariables,
  APITypes.DeleteUsersMutation
>;
export const createCars = /* GraphQL */ `mutation CreateCars(
  $input: CreateCarsInput!
  $condition: ModelCarsConditionInput
) {
  createCars(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.CreateCarsMutationVariables,
  APITypes.CreateCarsMutation
>;
export const updateCars = /* GraphQL */ `mutation UpdateCars(
  $input: UpdateCarsInput!
  $condition: ModelCarsConditionInput
) {
  updateCars(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.UpdateCarsMutationVariables,
  APITypes.UpdateCarsMutation
>;
export const deleteCars = /* GraphQL */ `mutation DeleteCars(
  $input: DeleteCarsInput!
  $condition: ModelCarsConditionInput
) {
  deleteCars(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.DeleteCarsMutationVariables,
  APITypes.DeleteCarsMutation
>;
