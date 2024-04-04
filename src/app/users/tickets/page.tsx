import { fetchUserCurrentTicketsByLicensePlateNum } from '@/app/actions/ticket.actions';
import { UserTickets } from './components/UserTickets';
import { getCurrentAuthUser } from '@/app/actions/user.actions';
import { getUserCarsByUseId } from '@/app/actions/car.actions';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

const UserCurrentTickets = async () => {
  try {
    const user = await getCurrentAuthUser();
    const cars = await getUserCarsByUseId(user.userId);
    const licensePlateNum = cars.length ? cars[0].licensePlateNum : '';
    const tickets = await fetchUserCurrentTicketsByLicensePlateNum(
      licensePlateNum
    );

    return (
      <main className="w-full p-6 min-h-screen bg-gray-100">
        <UserTickets tickets={tickets} car={cars[0]} />
      </main>
    );
  } catch (error) {
    console.error(error);
    return <div>Something went wrong. Pleas refresh the page.</div>;
  }
};
export default UserCurrentTickets;
