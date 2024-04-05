import {
  ModelSubscriptionTicketsFilterInput,
  OnCreateTicketsSubscription,
  OnUpdateTicketsSubscription,
  UpdateTicketsInput,
} from '@/API';
import { onCreateTickets, onUpdateTickets } from '@/graphql/subscriptions';
import { generateClient, GraphQLSubscription } from 'aws-amplify/api';
import { execute } from '../utils';
import { deleteTickets, updateTickets } from '@/graphql/mutations';
import { getTickets } from '@/graphql/queries';

class TicketService {
  public onTicketCreateSubscription(
    filter: ModelSubscriptionTicketsFilterInput
  ) {
    const client = generateClient();
    return client.graphql<GraphQLSubscription<OnCreateTicketsSubscription>>({
      query: onCreateTickets,
      variables: {
        filter,
      },
      authMode: 'userPool',
    });
  }

  public onTicketUpdateSubscription(
    filter: ModelSubscriptionTicketsFilterInput
  ) {
    const client = generateClient();
    return client.graphql<GraphQLSubscription<OnUpdateTicketsSubscription>>({
      query: onUpdateTickets,
      variables: {
        filter,
      },
      authMode: 'userPool',
    });
  }

  public async editTicket(input: UpdateTicketsInput) {
    const ticket = await execute(
      {
        statement: updateTickets,
        name: 'updateTickets',
      },
      {
        input,
      }
    );

    return ticket;
  }

  public async getTicketById(id: string) {
    const ticket = await execute(
      {
        statement: getTickets,
        name: 'getTickets',
      },
      {
        id,
      }
    );
    return ticket;
  }

  public async removeTicketById(id: string) {
    const ticket = await this.getTicketById(id);
    if (!ticket) {
      throw new Error('Ticket does not exist anymore!');
    }

    const deletedTicket = await execute(
      {
        statement: deleteTickets,
        name: 'deleteTickets',
      },
      {
        input: {
          id,
        },
      }
    );

    return deletedTicket;
  }
}

export const ticketService = new TicketService();
