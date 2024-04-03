import {
  ModelSubscriptionTicketsFilterInput,
  OnCreateTicketsSubscription,
  UpdateTicketsInput,
} from '@/API';
import { onCreateTickets } from '@/graphql/subscriptions';
import { generateClient, GraphQLSubscription } from 'aws-amplify/api';
import { execute } from '../utils';
import { updateTickets } from '@/graphql/mutations';

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
      authMode: 'iam',
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
}

export const ticketService = new TicketService();
