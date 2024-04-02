/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUsers = /* GraphQL */ `subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
  onCreateUsers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUsersSubscriptionVariables,
  APITypes.OnCreateUsersSubscription
>;
export const onUpdateUsers = /* GraphQL */ `subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
  onUpdateUsers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUsersSubscriptionVariables,
  APITypes.OnUpdateUsersSubscription
>;
export const onDeleteUsers = /* GraphQL */ `subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
  onDeleteUsers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUsersSubscriptionVariables,
  APITypes.OnDeleteUsersSubscription
>;
export const onCreateCars = /* GraphQL */ `subscription OnCreateCars($filter: ModelSubscriptionCarsFilterInput) {
  onCreateCars(filter: $filter) {
    licensePlateNum
    userId
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
` as GeneratedSubscription<
  APITypes.OnCreateCarsSubscriptionVariables,
  APITypes.OnCreateCarsSubscription
>;
export const onUpdateCars = /* GraphQL */ `subscription OnUpdateCars($filter: ModelSubscriptionCarsFilterInput) {
  onUpdateCars(filter: $filter) {
    licensePlateNum
    userId
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
` as GeneratedSubscription<
  APITypes.OnUpdateCarsSubscriptionVariables,
  APITypes.OnUpdateCarsSubscription
>;
export const onDeleteCars = /* GraphQL */ `subscription OnDeleteCars($filter: ModelSubscriptionCarsFilterInput) {
  onDeleteCars(filter: $filter) {
    licensePlateNum
    userId
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
` as GeneratedSubscription<
  APITypes.OnDeleteCarsSubscriptionVariables,
  APITypes.OnDeleteCarsSubscription
>;
export const onCreateCameras = /* GraphQL */ `subscription OnCreateCameras($filter: ModelSubscriptionCamerasFilterInput) {
  onCreateCameras(filter: $filter) {
    cameraId
    userId
    organizationName
    created_at
    updated_at
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCamerasSubscriptionVariables,
  APITypes.OnCreateCamerasSubscription
>;
export const onUpdateCameras = /* GraphQL */ `subscription OnUpdateCameras($filter: ModelSubscriptionCamerasFilterInput) {
  onUpdateCameras(filter: $filter) {
    cameraId
    userId
    organizationName
    created_at
    updated_at
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCamerasSubscriptionVariables,
  APITypes.OnUpdateCamerasSubscription
>;
export const onDeleteCameras = /* GraphQL */ `subscription OnDeleteCameras($filter: ModelSubscriptionCamerasFilterInput) {
  onDeleteCameras(filter: $filter) {
    cameraId
    userId
    organizationName
    created_at
    updated_at
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCamerasSubscriptionVariables,
  APITypes.OnDeleteCamerasSubscription
>;
export const onCreateTickets = /* GraphQL */ `subscription OnCreateTickets($filter: ModelSubscriptionTicketsFilterInput) {
  onCreateTickets(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTicketsSubscriptionVariables,
  APITypes.OnCreateTicketsSubscription
>;
export const onUpdateTickets = /* GraphQL */ `subscription OnUpdateTickets($filter: ModelSubscriptionTicketsFilterInput) {
  onUpdateTickets(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTicketsSubscriptionVariables,
  APITypes.OnUpdateTicketsSubscription
>;
export const onDeleteTickets = /* GraphQL */ `subscription OnDeleteTickets($filter: ModelSubscriptionTicketsFilterInput) {
  onDeleteTickets(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTicketsSubscriptionVariables,
  APITypes.OnDeleteTicketsSubscription
>;
