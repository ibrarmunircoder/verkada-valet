/* Amplify Params - DO NOT EDIT
	API_VERKADAVALET_GRAPHQLAPIENDPOINTOUTPUT
	API_VERKADAVALET_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import httpSecurityHeaders from '@middy/http-security-headers';
import jsonBodyParser from '@middy/http-json-body-parser';
import cors from '@middy/http-cors';
import createError from 'http-errors';
import { verifySignature } from './helpers.js';
import {
  getTicketByLicensePlateNum,
  getCameraById,
  deleteTicket,
} from './api.js';
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const handleRemoveTicket = async (event) => {
  const method = event.httpMethod;
  if (method === 'POST') {
    console.log(event);
    verifySignature(event.headers['Verkada-Signature']);
    const body = event.body;
    const orgCamera = await getCameraById(body.data.camera_id);
    if (!orgCamera) {
      throw new createError.UnprocessableEntity('Camera not found');
    }
    const ticket = await getTicketByLicensePlateNum(
      body.data.license_plate_number
    );
    if (!ticket) {
      throw new createError.UnprocessableEntity('Ticket not found');
    }
    await deleteTicket(ticket.id);
    return {
      statusCode: 200,
      body: null,
    };
  } else {
    return {
      statusCode: 200,
      body: null,
    };
  }
};

export const handler = middy()
  .use(cors())
  .use(jsonBodyParser())
  .use(httpSecurityHeaders())
  .use(httpErrorHandler())
  .handler(handleRemoveTicket);
