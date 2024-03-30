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
  created_at?: ModelStringInput | null,
  updated_at?: ModelStringInput | null,
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

export type CreateCarsInput = {
  licensePlateNum: string,
  userId: string,
  carMaker: string,
  carModel: string,
  color: string,
  year: number,
};

export type ModelCarsConditionInput = {
  userId?: ModelStringInput | null,
  carMaker?: ModelStringInput | null,
  carModel?: ModelStringInput | null,
  color?: ModelStringInput | null,
  year?: ModelIntInput | null,
  and?: Array< ModelCarsConditionInput | null > | null,
  or?: Array< ModelCarsConditionInput | null > | null,
  not?: ModelCarsConditionInput | null,
  created_at?: ModelStringInput | null,
  updated_at?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Cars = {
  __typename: "Cars",
  licensePlateNum: string,
  userId: string,
  carMaker: string,
  carModel: string,
  color: string,
  year: number,
  created_at: string,
  updated_at: string,
};

export type UpdateCarsInput = {
  licensePlateNum: string,
  userId?: string | null,
  carMaker?: string | null,
  carModel?: string | null,
  color?: string | null,
  year?: number | null,
};

export type DeleteCarsInput = {
  licensePlateNum: string,
};

export type ModelUsersFilterInput = {
  email?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  role?: ModelUserRoleInput | null,
  name?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  id?: ModelIDInput | null,
  created_at?: ModelStringInput | null,
  updated_at?: ModelStringInput | null,
  and?: Array< ModelUsersFilterInput | null > | null,
  or?: Array< ModelUsersFilterInput | null > | null,
  not?: ModelUsersFilterInput | null,
};

export type ModelIDInput = {
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

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUsersConnection = {
  __typename: "ModelUsersConnection",
  items:  Array<Users | null >,
  nextToken?: string | null,
};

export type ModelCarsFilterInput = {
  licensePlateNum?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  carMaker?: ModelStringInput | null,
  carModel?: ModelStringInput | null,
  color?: ModelStringInput | null,
  year?: ModelIntInput | null,
  id?: ModelIDInput | null,
  created_at?: ModelStringInput | null,
  updated_at?: ModelStringInput | null,
  and?: Array< ModelCarsFilterInput | null > | null,
  or?: Array< ModelCarsFilterInput | null > | null,
  not?: ModelCarsFilterInput | null,
};

export type ModelCarsConnection = {
  __typename: "ModelCarsConnection",
  items:  Array<Cars | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUsersFilterInput = {
  email?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  dob?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  created_at?: ModelSubscriptionStringInput | null,
  updated_at?: ModelSubscriptionStringInput | null,
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

export type ModelSubscriptionIDInput = {
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

export type ModelSubscriptionCarsFilterInput = {
  licensePlateNum?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
  carMaker?: ModelSubscriptionStringInput | null,
  carModel?: ModelSubscriptionStringInput | null,
  color?: ModelSubscriptionStringInput | null,
  year?: ModelSubscriptionIntInput | null,
  id?: ModelSubscriptionIDInput | null,
  created_at?: ModelSubscriptionStringInput | null,
  updated_at?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCarsFilterInput | null > | null,
  or?: Array< ModelSubscriptionCarsFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
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

export type CreateCarsMutationVariables = {
  input: CreateCarsInput,
  condition?: ModelCarsConditionInput | null,
};

export type CreateCarsMutation = {
  createCars?:  {
    __typename: "Cars",
    licensePlateNum: string,
    userId: string,
    carMaker: string,
    carModel: string,
    color: string,
    year: number,
    created_at: string,
    updated_at: string,
  } | null,
};

export type UpdateCarsMutationVariables = {
  input: UpdateCarsInput,
  condition?: ModelCarsConditionInput | null,
};

export type UpdateCarsMutation = {
  updateCars?:  {
    __typename: "Cars",
    licensePlateNum: string,
    userId: string,
    carMaker: string,
    carModel: string,
    color: string,
    year: number,
    created_at: string,
    updated_at: string,
  } | null,
};

export type DeleteCarsMutationVariables = {
  input: DeleteCarsInput,
  condition?: ModelCarsConditionInput | null,
};

export type DeleteCarsMutation = {
  deleteCars?:  {
    __typename: "Cars",
    licensePlateNum: string,
    userId: string,
    carMaker: string,
    carModel: string,
    color: string,
    year: number,
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

export type GetCarsQueryVariables = {
  licensePlateNum: string,
};

export type GetCarsQuery = {
  getCars?:  {
    __typename: "Cars",
    licensePlateNum: string,
    userId: string,
    carMaker: string,
    carModel: string,
    color: string,
    year: number,
    created_at: string,
    updated_at: string,
  } | null,
};

export type ListCarsQueryVariables = {
  licensePlateNum?: string | null,
  filter?: ModelCarsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCarsQuery = {
  listCars?:  {
    __typename: "ModelCarsConnection",
    items:  Array< {
      __typename: "Cars",
      licensePlateNum: string,
      userId: string,
      carMaker: string,
      carModel: string,
      color: string,
      year: number,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCarsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCarsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetCarsByUserIdQuery = {
  getCarsByUserId?:  {
    __typename: "ModelCarsConnection",
    items:  Array< {
      __typename: "Cars",
      licensePlateNum: string,
      userId: string,
      carMaker: string,
      carModel: string,
      color: string,
      year: number,
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

export type OnCreateCarsSubscriptionVariables = {
  filter?: ModelSubscriptionCarsFilterInput | null,
};

export type OnCreateCarsSubscription = {
  onCreateCars?:  {
    __typename: "Cars",
    licensePlateNum: string,
    userId: string,
    carMaker: string,
    carModel: string,
    color: string,
    year: number,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnUpdateCarsSubscriptionVariables = {
  filter?: ModelSubscriptionCarsFilterInput | null,
};

export type OnUpdateCarsSubscription = {
  onUpdateCars?:  {
    __typename: "Cars",
    licensePlateNum: string,
    userId: string,
    carMaker: string,
    carModel: string,
    color: string,
    year: number,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnDeleteCarsSubscriptionVariables = {
  filter?: ModelSubscriptionCarsFilterInput | null,
};

export type OnDeleteCarsSubscription = {
  onDeleteCars?:  {
    __typename: "Cars",
    licensePlateNum: string,
    userId: string,
    carMaker: string,
    carModel: string,
    color: string,
    year: number,
    created_at: string,
    updated_at: string,
  } | null,
};
