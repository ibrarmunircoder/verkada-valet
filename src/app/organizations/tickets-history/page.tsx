import { fetchPastUserTicketsByCameraId } from '@/app/actions/ticket.actions';
import { getCurrentAuthUser } from '@/app/actions/user.actions';

import { fetchCameraByUserId } from '@/app/actions/camera.actions';
import { OrganizationTicketsHistory } from './OrganizationTicketsHistory';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

const OrganizationPastTickets = async () => {
  try {
    const user = await getCurrentAuthUser();
    const cameras = await fetchCameraByUserId(user.userId);
    const cameraId = cameras.length ? cameras[0].cameraId : '';
    const tickets = await fetchPastUserTicketsByCameraId(cameraId);
    if (tickets.length === 0) {
      return (
        <main className="p-5">
          <div className="my-5 text-lg font-medium text-center">
            No Past tickets found
          </div>
        </main>
      );
    }
    return (
      <main className="w-full p-6 min-h-screen bg-gray-100">
        <OrganizationTicketsHistory tickets={tickets} />
      </main>
    );
  } catch (error) {
    console.error(error);
    return <div>Something went wrong. Pleas refresh the page.</div>;
  }
};
export default OrganizationPastTickets;
