'use client';

import { Cars, TicketStatus, Tickets } from '@/API';
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
    let sub: any;
    let sub1: any;
    if (car) {
      sub = ticketService
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

      sub1 = ticketService
        .onTicketDeleteSubscription({
          licensePlateNum: { eq: car.licensePlateNum },
        })
        .subscribe({
          next: async ({ data }) => {
            const ticket = data.onDeleteTickets as Tickets;
            setNewTickets((prev) => [
              ...prev.filter((tick) => tick.id !== ticket.id),
            ]);
          },
          error: (error) => console.log(error),
        });
    }

    return () => {
      if (sub) {
        sub.unsubscribe();
      }
      if (sub1) {
        sub1.unsubscribe();
      }
    };
  }, [car]);

  useEffect(() => {
    let sub: any;
    if (car) {
      sub = ticketService
        .onTicketUpdateSubscription({
          licensePlateNum: { eq: car.licensePlateNum },
        })
        .subscribe({
          next: async ({ data }) => {
            const ticket = data.onUpdateTickets as Tickets;
            if (ticket.status === TicketStatus.IN_PARKING) {
              const car = await carService.getCarByLicensePlateNum(
                ticket.licensePlateNum
              );
              ticket.car = car;
              setNewTickets((prev) => {
                const newTickets = [...prev];
                const ticketIndex = newTickets.findIndex(
                  (t) => t.id === ticket.id
                );
                newTickets.splice(ticketIndex, 1, ticket);
                return newTickets;
              });
            }
          },
          error: (error) => console.log(error, 'fffff'),
        });
    }

    return () => {
      if (sub) {
        sub.unsubscribe();
      }
    };
  }, [car]);

  if (newTickets.length === 0) {
    return (
      <main className="p-5">
        <div className="my-5 text-lg font-medium text-center">
          No Current tickets found
        </div>
      </main>
    );
  }

  const handleOnPickup = (ticketId: string) => {
    setNewTickets((prev) => {
      const newTickets = [...prev].filter((t) => t.id !== ticketId);
      return newTickets;
    });
  };

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
          <UserTicketCard
            key={ticket.id}
            ticket={ticket}
            onPickup={handleOnPickup}
            onRemove={handleOnRemove}
          />
        ))}
      </div>
    </>
  );
};
