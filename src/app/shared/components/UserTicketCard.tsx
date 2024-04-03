'use client';
import { TicketStatus, Tickets } from '@/API';
import { Badge, Button } from '@aws-amplify/ui-react';
import Image from 'next/image';
import dayjs from 'dayjs';
import React from 'react';

type UserTicketCardProps = {
  ticket: Tickets;
  onPickup?: (ticketId: string) => void;
};

export const UserTicketCard = ({ ticket, onPickup }: UserTicketCardProps) => {
  const handlePickup = () => {
    if (onPickup) {
      onPickup(ticket.id);
    }
  };

  return (
    <div key={ticket.id} className="bg-white rounded-md shadow-sm p-4 py-6">
      <div className="flex items-center gap-5 mb-10">
        <div className="relative">
          <Image
            src="/assets/images/parking.svg"
            className="relative z-0"
            alt="Car"
            width={60}
            height={80}
          />
          <Image
            className="absolute z-10 bg-white -bottom-2 -right-2"
            src="/assets/images/car.svg"
            alt="Car"
            width={30}
            height={30}
          />
        </div>
        <h3 className="text-2xl uppercase font-semibold">Valet Ticket</h3>
      </div>
      <div className="h-[2px] bg-black w-full" />
      <div className="p-1 flex flex-col items-center">
        <span className="text-sm uppercase font-bold tracking-widest">
          # Ticket Number
        </span>
        <span className="tex-sm font-bold tracking-wide">
          {ticket.ticketNum}
        </span>
      </div>
      <div className="h-[2px] bg-black w-full" />
      <div className="mt-5 flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold">Organization:</span>
          <span>{ticket.organizationName}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold">Time In:</span>
          <span>
            {dayjs(new Date(ticket.checkIn as string)).format(
              'DD MMM YYYY hh:ss'
            )}
          </span>
        </div>
        {ticket.status === TicketStatus.PICKEDUP && ticket.checkOut && (
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold">Time Out:</span>
            <span>
              {dayjs(new Date(ticket.checkOut as string)).format(
                'DD MMM YYYY hh:ss'
              )}
            </span>
          </div>
        )}
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold">Color:</span>
          <span>{ticket.car?.color}</span>
        </div>
        {ticket.status === TicketStatus.PICKEDUP && (
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold">Status:</span>
            <Badge variation="success">{ticket.status}</Badge>
          </div>
        )}
        {ticket.status === TicketStatus.IN_PARKING && (
          <Button onClick={handlePickup} variation="primary" isFullWidth>
            Pickup
          </Button>
        )}
      </div>
    </div>
  );
};
