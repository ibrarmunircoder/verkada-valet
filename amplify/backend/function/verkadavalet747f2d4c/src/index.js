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
import { generateRandomInteger, verifySignature } from './helpers.js';
import { createNewTicket, getCameraById } from './api.js';
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const handleCreateTicket = async (event) => {
  const method = event.httpMethod;
  if (method === 'POST') {
    console.log(event);
    verifySignature(event.headers['Verkada-Signature']);
    const body = event.body;
    const orgCamera = await getCameraById(body.data.camera_id);
    if (!orgCamera) {
      throw new createError.UnprocessableEntity('Camera not found');
    }
    await createNewTicket({
      ticketNum: generateRandomInteger(8),
      cameraId: body.data.camera_id,
      organizationName: orgCamera.organizationName,
      licensePlateNum: body.data.license_plate_number,
      status: 'IN_PARKING',
      checkIn: new Date(body.data.created * 1000).toISOString(),
      confidence: body.data.confidence,
    });
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
  .handler(handleCreateTicket);
