import { CreateCamerasInput } from '@/API';
import { execute } from '../utils';
import { createCameras } from '@/graphql/mutations';

class CameraService {
  async createNewCamera(input: CreateCamerasInput) {
    const camera = await execute(
      {
        statement: createCameras,
        name: 'createCameras',
      },
      {
        input,
      }
    );

    return camera;
  }
}

export const cameraService = new CameraService();
