export const getCameras = /* GraphQL */ `
  query GetCameras($cameraId: String!) {
    getCameras(cameraId: $cameraId) {
      cameraId
      userId
      organizationName
      created_at
      updated_at
      __typename
    }
  }
`;
