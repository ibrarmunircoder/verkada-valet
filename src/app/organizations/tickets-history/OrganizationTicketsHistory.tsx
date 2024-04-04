'use client';

import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Tickets } from '@/API';
import { OrganizationTicketCard } from '@/app/shared/components/OrganizationTicketCard';

type OrganizationTicketsHistoryProps = {
  tickets: Tickets[];
};

const groupTicketsByDate = (tickets: Tickets[]) => {
  const groups = tickets.reduce((groups: Record<string, Tickets[]>, ticket) => {
    const date = ticket.checkIn.split('T')[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(ticket);
    return groups;
  }, {});

  return groups;
};

export const OrganizationTicketsHistory = ({
  tickets,
}: OrganizationTicketsHistoryProps) => {
  const groupTickets = groupTicketsByDate(tickets);

  return (
    <div className="flex flex-col gap-3">
      {Object.keys(groupTickets).map((key) => (
        <div key={key}>
          <h2 className="mb-5 text-lg font-semibold underline underline-offset-4 decoration-2">
            Date: {key}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-3">
            {groupTickets[key].map((ticket) => (
              <OrganizationTicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
