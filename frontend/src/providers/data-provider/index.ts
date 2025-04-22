"use client";

import _dataProviderHasura, { GraphQLClient } from "@refinedev/hasura";
import _dataProviderSimpleRest from "@refinedev/simple-rest";

const HASURA_GRAPH_URL = process.env.NEXT_PUBLIC_HASURA_GRAPH_URL || (() => { 
  throw new Error("env variable NEXT_PUBLIC_HASURA_GRAPH_URL is not defined"); 
})();
const SIMPLE_REST_URL = process.env.NEXT_PUBLIC_SIMPLE_REST_URL || (() => { 
  throw new Error("env variable NEXT_PUBLIC_SIMPLE_REST_URL is not defined"); 
})();

export const client = new GraphQLClient(HASURA_GRAPH_URL, {
  headers: {
    "x-hasura-role": "public",
  },
});

export const dataProviderHasura = _dataProviderHasura(client);
export const dataProviderSimpleRest = _dataProviderSimpleRest(SIMPLE_REST_URL);
