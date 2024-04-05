'use client';

import { Cameras, TicketStatus, Tickets } from '@/API';
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
    let sub: any;
    if (camera) {
      sub = ticketService
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
    }

    return () => {
      if (sub) {
        sub.unsubscribe();
      }
    };
  }, [camera]);

  useEffect(() => {
    let sub: any;
    if (camera) {
      sub = ticketService
        .onTicketUpdateSubscription({
          cameraId: { eq: camera.cameraId },
        })
        .subscribe({
          next: async ({ data }) => {
            const ticket = data.onUpdateTickets as Tickets;
            if (ticket.status === TicketStatus.PICKEDUP) {
              setNewTickets((prev) => {
                const newTickets = [...prev].filter((t) => t.id !== ticket.id);
                return newTickets;
              });
            }
          },
          error: (error) => console.log(error),
        });
    }

    return () => {
      if (sub) {
        sub.unsubscribe();
      }
    };
  }, [camera]);

  if (newTickets.length === 0) {
    return (
      <main className="p-5">
        <div className="my-5 text-lg font-medium text-center">
          No Current tickets found
        </div>
      </main>
    );
  }

  const handleOnRemove = (ticketId: string) => {
    setNewTickets((prev) => {
      const newTickets = [...prev].filter((t) => t.id !== ticketId);
      return newTickets;
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-3">
        {newTickets.map((ticket) => (
          <OrganizationTicketCard
            key={ticket.id}
            ticket={ticket}
            onRemove={handleOnRemove}
          />
        ))}
      </div>
    </>
  );
};
