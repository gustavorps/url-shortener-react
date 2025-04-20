"use client";

import dataProviderHasura, { GraphQLClient } from "@refinedev/hasura";

const API_URL = process.env.NEXT_PUBLIC_HASURA_GRAPH_URL || (() => { 
  throw new Error("env variable NEXT_PUBLIC_HASURA_GRAPH_URL is not defined"); 
})();

export const client = new GraphQLClient(API_URL, {
  headers: {
    "x-hasura-role": "public",
  },
});

export const dataProvider = dataProviderHasura(client);
