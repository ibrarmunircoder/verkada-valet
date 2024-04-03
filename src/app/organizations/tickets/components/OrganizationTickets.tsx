'use client';

import { Cameras, Tickets } from '@/API';
import { useEffect, useState } from 'react';
import { ticketService } from '@/app/shared/services/ticket.service';
import { carService } from '@/app/shared/services/cars.service';
import { OrganizationTicketCard } from '@/app/shared/components/OrganizationTicketCard';

type UserTicketsProps = {
  tickets: Tickets[];
  camera: Cameras;
};

export const OrganizationTickets = ({ tickets, camera }: UserTicketsProps) => {
  const [newTickets, setNewTickets] = useState<Tickets[]>(tickets);

  useEffect(() => {
    const sub = ticketService
      .onTicketCreateSubscription({
        cameraId: { eq: camera.cameraId },
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
  }, [camera]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-3">
        {newTickets.map((ticket) => (
          <OrganizationTicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </>
  );
};
