'use client';

import { Cars, Tickets } from '@/API';
import { useEffect, useState } from 'react';
import { ticketService } from '@/app/shared/services/ticket.service';
import { carService } from '@/app/shared/services/cars.service';
import { UserTicketCard } from '@/app/shared/components/UserTicketCard';

type UserTicketsProps = {
  tickets: Tickets[];
  car: Cars;
};

export const UserTickets = ({ tickets, car }: UserTicketsProps) => {
  const [newTickets, setNewTickets] = useState<Tickets[]>(tickets);

  useEffect(() => {
    const sub = ticketService
      .onTicketCreateSubscription({
        licensePlateNum: { eq: car.licensePlateNum },
      })
      .subscribe({
        next: async ({ data }) => {
          const ticket = data.onCreateTickets as Tickets;
          const car = await carService.getCarByLicensePlateNum(
            ticket.licensePlateNum
          );
          ticket.car = car;
          setNewTickets((prev) => [...prev, ticket]);
        },
        error: (error) => console.log(error),
      });

    return () => {
      sub.unsubscribe();
    };
  }, [car]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-3">
        {newTickets.map((ticket) => (
          <UserTicketCard key={ticket.id} ticket={ticket} onPickup={() => {}} />
        ))}
      </div>
    </>
  );
};
