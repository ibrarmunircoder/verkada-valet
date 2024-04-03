/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelTicketsFilterInput = {
  ticketNum?: ModelStringInput | null,
  cameraId?: ModelStringInput | null,
  organizationName?: ModelStringInput | null,
  slot?: ModelIntInput | null,
  licensePlateNum?: ModelStringInput | null,
  status?: ModelTicketStatusInput | null,
  checkIn?: ModelStringInput | null,
  checkOut?: ModelStringInput | null,
  id?: ModelIDInput | null,
  created_at?: ModelStringInput | null,
  updated_at?: ModelStringInput | null,
  and?: Array< ModelTicketsFilterInput | null > | null,
  or?: Array< ModelTicketsFilterInput | null > | null,
  not?: ModelTicketsFilterInput | null,
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

export type ModelTicketStatusInput = {
  eq?: TicketStatus | null,
  ne?: TicketStatus | null,
};

export enum TicketStatus {
  IN_PARKING = "IN_PARKING",
  PICKEDUP = "PICKEDUP",
}


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

export type ModelTicketsConnection = {
  __typename: "ModelTicketsConnection",
  items:  Array<Tickets | null >,
  nextToken?: string | null,
};

export type Tickets = {
  __typename: "Tickets",
  ticketNum: string,
  cameraId: string,
  organizationName: string,
  slot?: number | null,
  licensePlateNum: string,
  car?: Cars | null,
  status: TicketStatus,
  checkIn?: string | null,
  checkOut?: string | null,
  id: string,
  created_at: string,
  updated_at: string,
};

export type Cars = {
  __typename: "Cars",
  licensePlateNum: string,
  userId: string,
  username: string,
  carMaker: string,
  carModel: string,
  color: string,
  year: number,
  tickets?: ModelTicketsConnection | null,
  created_at: string,
  updated_at: string,
};

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
  username: string,
  carMaker: string,
  carModel: string,
  color: string,
  year: number,
};

export type ModelCarsConditionInput = {
  userId?: ModelStringInput | null,
  username?: ModelStringInput | null,
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

export type UpdateCarsInput = {
  licensePlateNum: string,
  userId?: string | null,
  username?: string | null,
  carMaker?: string | null,
  carModel?: string | null,
  color?: string | null,
  year?: number | null,
};

export type DeleteCarsInput = {
  licensePlateNum: string,
};

export type CreateCamerasInput = {
  cameraId: string,
  userId: string,
  organizationName: string,
};

export type ModelCamerasConditionInput = {
  userId?: ModelStringInput | null,
  organizationName?: ModelStringInput | null,
  and?: Array< ModelCamerasConditionInput | null > | null,
  or?: Array< ModelCamerasConditionInput | null > | null,
  not?: ModelCamerasConditionInput | null,
  created_at?: ModelStringInput | null,
  updated_at?: ModelStringInput | null,
};

export type Cameras = {
  __typename: "Cameras",
  cameraId: string,
  userId: string,
  organizationName: string,
  created_at: string,
  updated_at: string,
};

export type UpdateCamerasInput = {
  cameraId: string,
  userId?: string | null,
  organizationName?: string | null,
};

export type DeleteCamerasInput = {
  cameraId: string,
};

export type CreateTicketsInput = {
  ticketNum: string,
  cameraId: string,
  organizationName: string,
  slot?: number | null,
  licensePlateNum: string,
  status: TicketStatus,
  checkIn?: string | null,
  checkOut?: string | null,
  id?: string | null,
};

export type ModelTicketsConditionInput = {
  ticketNum?: ModelStringInput | null,
  cameraId?: ModelStringInput | null,
  organizationName?: ModelStringInput | null,
  slot?: ModelIntInput | null,
  licensePlateNum?: ModelStringInput | null,
  status?: ModelTicketStatusInput | null,
  checkIn?: ModelStringInput | null,
  checkOut?: ModelStringInput | null,
  and?: Array< ModelTicketsConditionInput | null > | null,
  or?: Array< ModelTicketsConditionInput | null > | null,
  not?: ModelTicketsConditionInput | null,
  created_at?: ModelStringInput | null,
  updated_at?: ModelStringInput | null,
};

export type UpdateTicketsInput = {
  ticketNum?: string | null,
  cameraId?: string | null,
  organizationName?: string | null,
  slot?: number | null,
  licensePlateNum?: string | null,
  status?: TicketStatus | null,
  checkIn?: string | null,
  checkOut?: string | null,
  id: string,
};

export type DeleteTicketsInput = {
  id: string,
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

export type ModelUsersConnection = {
  __typename: "ModelUsersConnection",
  items:  Array<Users | null >,
  nextToken?: string | null,
};

export type ModelCarsFilterInput = {
  licensePlateNum?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  username?: ModelStringInput | null,
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

export type ModelCamerasFilterInput = {
  cameraId?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  organizationName?: ModelStringInput | null,
  id?: ModelIDInput | null,
  created_at?: ModelStringInput | null,
  updated_at?: ModelStringInput | null,
  and?: Array< ModelCamerasFilterInput | null > | null,
  or?: Array< ModelCamerasFilterInput | null > | null,
  not?: ModelCamerasFilterInput | null,
};

export type ModelCamerasConnection = {
  __typename: "ModelCamerasConnection",
  items:  Array<Cameras | null >,
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
  username?: ModelSubscriptionStringInput | null,
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

export type ModelSubscriptionCamerasFilterInput = {
  cameraId?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
  organizationName?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  created_at?: ModelSubscriptionStringInput | null,
  updated_at?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCamerasFilterInput | null > | null,
  or?: Array< ModelSubscriptionCamerasFilterInput | null > | null,
};

export type ModelSubscriptionTicketsFilterInput = {
  ticketNum?: ModelSubscriptionStringInput | null,
  cameraId?: ModelSubscriptionStringInput | null,
  organizationName?: ModelSubscriptionStringInput | null,
  slot?: ModelSubscriptionIntInput | null,
  licensePlateNum?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  checkIn?: ModelSubscriptionStringInput | null,
  checkOut?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  created_at?: ModelSubscriptionStringInput | null,
  updated_at?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTicketsFilterInput | null > | null,
  or?: Array< ModelSubscriptionTicketsFilterInput | null > | null,
};

export type CustomTicketsByLicensePlateNumQueryVariables = {
  licensePlateNum: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTicketsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CustomTicketsByLicensePlateNumQuery = {
  ticketsByLicensePlateNum?:  {
    __typename: "ModelTicketsConnection",
    items:  Array< {
      __typename: "Tickets",
      ticketNum: string,
      cameraId: string,
      organizationName: string,
      licensePlateNum: string,
      status: TicketStatus,
      checkIn?: string | null,
      checkOut?: string | null,
      id: string,
      car?:  {
        __typename: "Cars",
        licensePlateNum: string,
        userId: string,
        carMaker: string,
        carModel: string,
        color: string,
        year: number,
      } | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
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
    username: string,
    carMaker: string,
    carModel: string,
    color: string,
    year: number,
    tickets?:  {
      __typename: "ModelTicketsConnection",
      nextToken?: string | null,
    } | null,
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
    username: string,
    carMaker: string,
    carModel: string,
    color: string,
    year: number,
    tickets?:  {
      __typename: "ModelTicketsConnection",
      nextToken?: string | null,
    } | null,
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
    username: string,
    carMaker: string,
    carModel: string,
    color: string,
    year: number,
    tickets?:  {
      __typename: "ModelTicketsConnection",
      nextToken?: string | null,
    } | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type CreateCamerasMutationVariables = {
  input: CreateCamerasInput,
  condition?: ModelCamerasConditionInput | null,
};

export type CreateCamerasMutation = {
  createCameras?:  {
    __typename: "Cameras",
    cameraId: string,
    userId: string,
    organizationName: string,
    created_at: string,
    updated_at: string,
  } | null,
};

export type UpdateCamerasMutationVariables = {
  input: UpdateCamerasInput,
  condition?: ModelCamerasConditionInput | null,
};

export type UpdateCamerasMutation = {
  updateCameras?:  {
    __typename: "Cameras",
    cameraId: string,
    userId: string,
    organizationName: string,
    created_at: string,
    updated_at: string,
  } | null,
};

export type DeleteCamerasMutationVariables = {
  input: DeleteCamerasInput,
  condition?: ModelCamerasConditionInput | null,
};

export type DeleteCamerasMutation = {
  deleteCameras?:  {
    __typename: "Cameras",
    cameraId: string,
    userId: string,
    organizationName: string,
    created_at: string,
    updated_at: string,
  } | null,
};

export type CreateTicketsMutationVariables = {
  input: CreateTicketsInput,
  condition?: ModelTicketsConditionInput | null,
};

export type CreateTicketsMutation = {
  createTickets?:  {
    __typename: "Tickets",
    ticketNum: string,
    cameraId: string,
    organizationName: string,
    slot?: number | null,
    licensePlateNum: string,
    car?:  {
      __typename: "Cars",
      licensePlateNum: string,
      userId: string,
      username: string,
      carMaker: string,
      carModel: string,
      color: string,
      year: number,
      created_at: string,
      updated_at: string,
    } | null,
    status: TicketStatus,
    checkIn?: string | null,
    checkOut?: string | null,
    id: string,
    created_at: string,
    updated_at: string,
  } | null,
};

export type UpdateTicketsMutationVariables = {
  input: UpdateTicketsInput,
  condition?: ModelTicketsConditionInput | null,
};

export type UpdateTicketsMutation = {
  updateTickets?:  {
    __typename: "Tickets",
    ticketNum: string,
    cameraId: string,
    organizationName: string,
    slot?: number | null,
    licensePlateNum: string,
    car?:  {
      __typename: "Cars",
      licensePlateNum: string,
      userId: string,
      username: string,
      carMaker: string,
      carModel: string,
      color: string,
      year: number,
      created_at: string,
      updated_at: string,
    } | null,
    status: TicketStatus,
    checkIn?: string | null,
    checkOut?: string | null,
    id: string,
    created_at: string,
    updated_at: string,
  } | null,
};

export type DeleteTicketsMutationVariables = {
  input: DeleteTicketsInput,
  condition?: ModelTicketsConditionInput | null,
};

export type DeleteTicketsMutation = {
  deleteTickets?:  {
    __typename: "Tickets",
    ticketNum: string,
    cameraId: string,
    organizationName: string,
    slot?: number | null,
    licensePlateNum: string,
    car?:  {
      __typename: "Cars",
      licensePlateNum: string,
      userId: string,
      username: string,
      carMaker: string,
      carModel: string,
      color: string,
      year: number,
      created_at: string,
      updated_at: string,
    } | null,
    status: TicketStatus,
    checkIn?: string | null,
    checkOut?: string | null,
    id: string,
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
    username: string,
    carMaker: string,
    carModel: string,
    color: string,
    year: number,
    tickets?:  {
      __typename: "ModelTicketsConnection",
      nextToken?: string | null,
    } | null,
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
      username: string,
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
      username: string,
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

export type GetCamerasQueryVariables = {
  cameraId: string,
};

export type GetCamerasQuery = {
  getCameras?:  {
    __typename: "Cameras",
    cameraId: string,
    userId: string,
    organizationName: string,
    created_at: string,
    updated_at: string,
  } | null,
};

export type ListCamerasQueryVariables = {
  cameraId?: string | null,
  filter?: ModelCamerasFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCamerasQuery = {
  listCameras?:  {
    __typename: "ModelCamerasConnection",
    items:  Array< {
      __typename: "Cameras",
      cameraId: string,
      userId: string,
      organizationName: string,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCamerasByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCamerasFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetCamerasByUserIdQuery = {
  getCamerasByUserId?:  {
    __typename: "ModelCamerasConnection",
    items:  Array< {
      __typename: "Cameras",
      cameraId: string,
      userId: string,
      organizationName: string,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTicketsQueryVariables = {
  id: string,
};

export type GetTicketsQuery = {
  getTickets?:  {
    __typename: "Tickets",
    ticketNum: string,
    cameraId: string,
    organizationName: string,
    slot?: number | null,
    licensePlateNum: string,
    car?:  {
      __typename: "Cars",
      licensePlateNum: string,
      userId: string,
      username: string,
      carMaker: string,
      carModel: string,
      color: string,
      year: number,
      created_at: string,
      updated_at: string,
    } | null,
    status: TicketStatus,
    checkIn?: string | null,
    checkOut?: string | null,
    id: string,
    created_at: string,
    updated_at: string,
  } | null,
};

export type ListTicketsQueryVariables = {
  filter?: ModelTicketsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTicketsQuery = {
  listTickets?:  {
    __typename: "ModelTicketsConnection",
    items:  Array< {
      __typename: "Tickets",
      ticketNum: string,
      cameraId: string,
      organizationName: string,
      slot?: number | null,
      licensePlateNum: string,
      status: TicketStatus,
      checkIn?: string | null,
      checkOut?: string | null,
      id: string,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TicketsByLicensePlateNumQueryVariables = {
  licensePlateNum: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTicketsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TicketsByLicensePlateNumQuery = {
  ticketsByLicensePlateNum?:  {
    __typename: "ModelTicketsConnection",
    items:  Array< {
      __typename: "Tickets",
      ticketNum: string,
      cameraId: string,
      organizationName: string,
      slot?: number | null,
      licensePlateNum: string,
      status: TicketStatus,
      checkIn?: string | null,
      checkOut?: string | null,
      id: string,
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
    username: string,
    carMaker: string,
    carModel: string,
    color: string,
    year: number,
    tickets?:  {
      __typename: "ModelTicketsConnection",
      nextToken?: string | null,
    } | null,
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
    username: string,
    carMaker: string,
    carModel: string,
    color: string,
    year: number,
    tickets?:  {
      __typename: "ModelTicketsConnection",
      nextToken?: string | null,
    } | null,
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
    username: string,
    carMaker: string,
    carModel: string,
    color: string,
    year: number,
    tickets?:  {
      __typename: "ModelTicketsConnection",
      nextToken?: string | null,
    } | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnCreateCamerasSubscriptionVariables = {
  filter?: ModelSubscriptionCamerasFilterInput | null,
};

export type OnCreateCamerasSubscription = {
  onCreateCameras?:  {
    __typename: "Cameras",
    cameraId: string,
    userId: string,
    organizationName: string,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnUpdateCamerasSubscriptionVariables = {
  filter?: ModelSubscriptionCamerasFilterInput | null,
};

export type OnUpdateCamerasSubscription = {
  onUpdateCameras?:  {
    __typename: "Cameras",
    cameraId: string,
    userId: string,
    organizationName: string,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnDeleteCamerasSubscriptionVariables = {
  filter?: ModelSubscriptionCamerasFilterInput | null,
};

export type OnDeleteCamerasSubscription = {
  onDeleteCameras?:  {
    __typename: "Cameras",
    cameraId: string,
    userId: string,
    organizationName: string,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnCreateTicketsSubscriptionVariables = {
  filter?: ModelSubscriptionTicketsFilterInput | null,
};

export type OnCreateTicketsSubscription = {
  onCreateTickets?:  {
    __typename: "Tickets",
    ticketNum: string,
    cameraId: string,
    organizationName: string,
    slot?: number | null,
    licensePlateNum: string,
    car?:  {
      __typename: "Cars",
      licensePlateNum: string,
      userId: string,
      username: string,
      carMaker: string,
      carModel: string,
      color: string,
      year: number,
      created_at: string,
      updated_at: string,
    } | null,
    status: TicketStatus,
    checkIn?: string | null,
    checkOut?: string | null,
    id: string,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnUpdateTicketsSubscriptionVariables = {
  filter?: ModelSubscriptionTicketsFilterInput | null,
};

export type OnUpdateTicketsSubscription = {
  onUpdateTickets?:  {
    __typename: "Tickets",
    ticketNum: string,
    cameraId: string,
    organizationName: string,
    slot?: number | null,
    licensePlateNum: string,
    car?:  {
      __typename: "Cars",
      licensePlateNum: string,
      userId: string,
      username: string,
      carMaker: string,
      carModel: string,
      color: string,
      year: number,
      created_at: string,
      updated_at: string,
    } | null,
    status: TicketStatus,
    checkIn?: string | null,
    checkOut?: string | null,
    id: string,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnDeleteTicketsSubscriptionVariables = {
  filter?: ModelSubscriptionTicketsFilterInput | null,
};

export type OnDeleteTicketsSubscription = {
  onDeleteTickets?:  {
    __typename: "Tickets",
    ticketNum: string,
    cameraId: string,
    organizationName: string,
    slot?: number | null,
    licensePlateNum: string,
    car?:  {
      __typename: "Cars",
      licensePlateNum: string,
      userId: string,
      username: string,
      carMaker: string,
      carModel: string,
      color: string,
      year: number,
      created_at: string,
      updated_at: string,
    } | null,
    status: TicketStatus,
    checkIn?: string | null,
    checkOut?: string | null,
    id: string,
    created_at: string,
    updated_at: string,
  } | null,
};
