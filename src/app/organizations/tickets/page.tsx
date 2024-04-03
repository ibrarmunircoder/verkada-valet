import { fetchCameraByUserId } from '@/app/actions/camera.actions';
import { fetchCurrentUserTicketsByCameraId } from '@/app/actions/ticket.actions';
import { getCurrentAuthUser } from '@/app/actions/user.actions';
import { OrganizationTickets } from './components/OrganizationTickets';

const OrganizationCurrentTickets = async () => {
  try {
    const user = await getCurrentAuthUser();
    const cameras = await fetchCameraByUserId(user.userId);
    const cameraId = cameras.length ? cameras[0].cameraId : '';
    const tickets = await fetchCurrentUserTicketsByCameraId(cameraId);
    if (tickets.length === 0) {
      return (
        <main className="p-5">
          <div className="my-5 text-lg font-medium text-center">
            No Current tickets found
          </div>
        </main>
      );
    }
    return (
      <main className="w-full p-6 min-h-screen bg-gray-100">
        <OrganizationTickets tickets={tickets} camera={cameras[0]} />
      </main>
    );
  } catch (error) {
    console.error(error);
    return;
  }
};
export default OrganizationCurrentTickets;
