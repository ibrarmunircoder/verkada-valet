'use client';
import { TicketStatus, Tickets } from '@/API';
import { Badge, Button, Input } from '@aws-amplify/ui-react';
import Image from 'next/image';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { ticketService } from '../services/ticket.service';

type UserTicketCardProps = {
  ticket: Tickets;
};

export const OrganizationTicketCard = ({ ticket }: UserTicketCardProps) => {
  const [formState, setFormState] = useState({
    slot: '',
  });
  const [ticketState, setTicketState] = useState<Tickets>(ticket);
  const [isLoading, setIsLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleAddSlot = () => {
    setIsEdit(true);
  };

  const validateForm = () => {
    if (!formState.slot) {
      throw new Error('Please add a slot number');
    }
  };

  const handleUpdateTicketSlot = async () => {
    const toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
    });
    try {
      validateForm();
      setIsLoading(true);
      const ticket = await ticketService.editTicket({
        id: ticketState.id,
        slot: +formState.slot,
      });
      setTicketState((prev) => ({
        ...prev,
        slot: ticket.slot,
      }));
      setIsEdit(false);
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
  };

  return (
    <div className="bg-white rounded-md shadow-sm p-4 py-6">
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
          {ticketState.ticketNum}
        </span>
      </div>
      <div className="h-[2px] bg-black w-full" />
      <div className="mt-5 flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold">Username:</span>
          <span>{ticketState.car?.username}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold">Time In:</span>
          <span>
            {dayjs(new Date(ticketState.checkIn as string)).format(
              'DD MMM YYYY hh:ss'
            )}
          </span>
        </div>
        {ticketState.status === TicketStatus.PICKEDUP &&
          ticketState.checkOut && (
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold">Time Out:</span>
              <span>
                {dayjs(new Date(ticketState.checkOut as string)).format(
                  'DD MMM YYYY hh:ss'
                )}
              </span>
            </div>
          )}
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold">Color:</span>
          <span>{ticketState.car?.color}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold">Slot:</span>
          {isEdit ? (
            <Input
              size="small"
              type="number"
              onChange={(e) =>
                setFormState({
                  slot: e.target.value,
                })
              }
            />
          ) : (
            <span>{ticketState.slot}</span>
          )}
        </div>
        {ticketState.status === TicketStatus.PICKEDUP && (
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold">Status:</span>
            <Badge variation="success">{ticketState.status}</Badge>
          </div>
        )}
        {ticketState.status === TicketStatus.IN_PARKING && (
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold">Status:</span>
            <Badge variation="info">{ticketState.status}</Badge>
          </div>
        )}
        <Button
          isLoading={isLoading}
          onClick={isEdit ? handleUpdateTicketSlot : handleAddSlot}
          variation="primary"
          isFullWidth
        >
          {isEdit ? 'Save' : 'Add Slot'}
        </Button>
      </div>
    </div>
  );
};
