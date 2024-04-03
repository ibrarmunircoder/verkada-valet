import { fetchUserPastTicketsByLicensePlateNum } from '@/app/actions/ticket.actions';
import { getCurrentAuthUser } from '@/app/actions/user.actions';
import { getUserCarsByUseId } from '@/app/actions/car.actions';
import { UserTicketCard } from '@/app/shared/components/UserTicketCard';

export const dynamic = 'force-dynamic';

const UserPastTickets = async () => {
  try {
    const user = await getCurrentAuthUser();
    const cars = await getUserCarsByUseId(user.userId);
    const licensePlateNum = cars.length ? cars[0].licensePlateNum : '';
    const tickets = await fetchUserPastTicketsByLicensePlateNum(
      licensePlateNum
    );
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-3">
          {tickets.map((ticket) => (
            <UserTicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </main>
    );
  } catch (error) {
    console.error(error);
    return <div>Something went wrong. Pleas refresh the page.</div>;
  }
};
export default UserPastTickets;
