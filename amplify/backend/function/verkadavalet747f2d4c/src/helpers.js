import crypto from '@aws-crypto/sha256-js';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { SignatureV4 } from '@aws-sdk/signature-v4';
import { HttpRequest } from '@aws-sdk/protocol-http';
import { default as fetch, Request } from 'node-fetch';
import createError from 'http-errors';

const GRAPHQL_ENDPOINT = process.env.API_VERKADAVALET_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.AWS_REGION;
const { Sha256 } = crypto;

const endpoint = new URL(GRAPHQL_ENDPOINT);

const signer = new SignatureV4({
  credentials: defaultProvider(),
  region: AWS_REGION,
  service: 'appsync',
  sha256: Sha256,
});

export const createAppsyncRequest = async (query, variables) => {
  const requestToBeSigned = new HttpRequest({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      host: endpoint.host,
    },
    hostname: endpoint.host,
    body: JSON.stringify({ query, variables }),
    path: endpoint.pathname,
  });
  const signed = await signer.sign(requestToBeSigned);
  return new Request(endpoint, signed);
};

export const executeRequest = async ({ query, name }, variables) => {
  const request = await createAppsyncRequest(query, variables);
  const response = await fetch(request);
  const data = (await response.json()).data;
  return data[name];
};

export const generateRandomInteger = (integerLength) => {
  const characters = '0123456789';
  let result = ' ';
  const charactersLength = characters.length;
  for (let i = 0; i < integerLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return parseInt(result, 10);
};

export const verifySignature = (verkadaSignatureHeaderValue) => {
  if (!verkadaSignatureHeaderValue) {
    throw new createError.Unauthorized('Invalid signature');
  }
  const [timestamp, signature] = verkadaSignatureHeaderValue.split('|');
  if (!timestamp || !signature) {
    throw new createError.Unauthorized('Invalid signature');
  }
};
