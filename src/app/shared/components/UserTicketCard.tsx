'use client';
import React, { useState } from 'react';
import { TicketStatus, Tickets } from '@/API';
import { Badge, Button } from '@aws-amplify/ui-react';
import Image from 'next/image';
import dayjs from 'dayjs';
import Swal from 'sweetalert2';
import { ticketService } from '../services/ticket.service';

type UserTicketCardProps = {
  ticket: Tickets;
  onPickup?: (ticketId: string) => void;
  onRemove?: (ticketId: string) => void;
};

export const UserTicketCard = ({
  ticket,
  onPickup,
  onRemove,
}: UserTicketCardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRemoving, setIsRemobingLoading] = useState(false);
  const handlePickup = async () => {
    if (onPickup) {
      const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
      });
      try {
        setIsLoading(true);
        const updatedTicket = await ticketService.editTicket({
          status: TicketStatus.PICKEDUP,
          checkOut: new Date().toISOString(),
          id: ticket.id,
        });
        onPickup(updatedTicket.id);
      } catch (error: any) {
        console.error(error);
        toast.fire({
          icon: 'error',
          title: error.message || 'Something went wrong!. Please try again.',
          padding: '10px 20px',
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleRemoveTicket = async () => {
    const toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
    });
    try {
      setIsRemobingLoading(true);
      await ticketService.removeTicketById(ticket.id);
      toast.fire({
        icon: 'success',
        title: 'Ticket removed successfully!',
        padding: '10px 20px',
      });
    } catch (error: any) {
      console.log(error);
      toast.fire({
        icon: 'error',
        title: error.message || 'Something went wrong!. Please try again.',
        padding: '10px 20px',
      });
    } finally {
      if (onRemove) {
        onRemove(ticket.id);
      }
      setIsRemobingLoading(false);
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
          <span className="text-sm font-bold">License Plate:</span>
          <span>{ticket.car?.licensePlateNum}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold">Color:</span>
          <span>{ticket.car?.color}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold">Slot:</span>
          <span>{ticket.slot}</span>
        </div>
        {ticket.status === TicketStatus.PICKEDUP && (
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold">Status:</span>
            <Badge variation="success">{ticket.status}</Badge>
          </div>
        )}
        {ticket.status === TicketStatus.IN_PARKING && (
          <div className="flex gap-2">
            <Button
              isLoading={isLoading}
              onClick={handlePickup}
              variation="primary"
              isFullWidth
            >
              Pickup
            </Button>
            <Button
              isLoading={isRemoving}
              onClick={handleRemoveTicket}
              variation="primary"
              colorTheme="error"
              isFullWidth
            >
              Remove
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
