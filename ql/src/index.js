// 9pHgGy650O6lBQ8ahYF9EmBp - Endpoint Token

import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import path from 'path';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import normalizePort from 'normalize-port';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import {  ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

import db from './models';

require('dotenv').config();

async function startApolloServer() {
  const typeDefs = mergeTypeDefs(loadFilesSync(path.join(__dirname, './schema')));
  const resolvers = mergeResolvers(
    loadFilesSync(path.join(__dirname, './resolvers')),
  );

  const app = express();
  const port = normalizePort(process.env.PORT || '8000');

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
    introspection: true,
  });

  await db();
  await server.start();

  app.use(
    '/graphql',
    cors(),
    bodyParser.json(),
    expressMiddleware(server, {
      // context: async ({ req }) => ({ token: req.headers.token }),
      context: async ({ req, res }) => ({
        req,
        res,
      }),
    }),
  );
  httpServer.listen(port, () => console.log(`Running on 🚀 http://localhost:${port}/graphql`));
}

startApolloServer();