/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUsersInput = {
  email: string,
  userId: string,
  role: UserRole,
  name: string,
  dob?: string | null,
};

export enum UserRole {
  USER = "USER",
  ORGANIZATION = "ORGANIZATION",
}


export type ModelUsersConditionInput = {
  userId?: ModelStringInput | null,
  role?: ModelUserRoleInput | null,
  name?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  and?: Array< ModelUsersConditionInput | null > | null,
  or?: Array< ModelUsersConditionInput | null > | null,
  not?: ModelUsersConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelUserRoleInput = {
  eq?: UserRole | null,
  ne?: UserRole | null,
};

export type Users = {
  __typename: "Users",
  email: string,
  userId: string,
  role: UserRole,
  name: string,
  dob?: string | null,
  created_at: string,
  updated_at: string,
};

export type UpdateUsersInput = {
  email: string,
  userId?: string | null,
  role?: UserRole | null,
  name?: string | null,
  dob?: string | null,
};

export type DeleteUsersInput = {
  email: string,
};

export type ModelUsersFilterInput = {
  email?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  role?: ModelUserRoleInput | null,
  name?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  and?: Array< ModelUsersFilterInput | null > | null,
  or?: Array< ModelUsersFilterInput | null > | null,
  not?: ModelUsersFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUsersConnection = {
  __typename: "ModelUsersConnection",
  items:  Array<Users | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUsersFilterInput = {
  email?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  dob?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUsersFilterInput | null > | null,
  or?: Array< ModelSubscriptionUsersFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateUsersMutationVariables = {
  input: CreateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type CreateUsersMutation = {
  createUsers?:  {
    __typename: "Users",
    email: string,
    userId: string,
    role: UserRole,
    name: string,
    dob?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type UpdateUsersMutationVariables = {
  input: UpdateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type UpdateUsersMutation = {
  updateUsers?:  {
    __typename: "Users",
    email: string,
    userId: string,
    role: UserRole,
    name: string,
    dob?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type DeleteUsersMutationVariables = {
  input: DeleteUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type DeleteUsersMutation = {
  deleteUsers?:  {
    __typename: "Users",
    email: string,
    userId: string,
    role: UserRole,
    name: string,
    dob?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type GetUsersQueryVariables = {
  email: string,
};

export type GetUsersQuery = {
  getUsers?:  {
    __typename: "Users",
    email: string,
    userId: string,
    role: UserRole,
    name: string,
    dob?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type ListUsersQueryVariables = {
  email?: string | null,
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUsersConnection",
    items:  Array< {
      __typename: "Users",
      email: string,
      userId: string,
      role: UserRole,
      name: string,
      dob?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetUserByUserIdQuery = {
  getUserByUserId?:  {
    __typename: "ModelUsersConnection",
    items:  Array< {
      __typename: "Users",
      email: string,
      userId: string,
      role: UserRole,
      name: string,
      dob?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnCreateUsersSubscription = {
  onCreateUsers?:  {
    __typename: "Users",
    email: string,
    userId: string,
    role: UserRole,
    name: string,
    dob?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnUpdateUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnUpdateUsersSubscription = {
  onUpdateUsers?:  {
    __typename: "Users",
    email: string,
    userId: string,
    role: UserRole,
    name: string,
    dob?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnDeleteUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnDeleteUsersSubscription = {
  onDeleteUsers?:  {
    __typename: "Users",
    email: string,
    userId: string,
    role: UserRole,
    name: string,
    dob?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};
