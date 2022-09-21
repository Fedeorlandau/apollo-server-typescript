import { ApolloServer } from 'apollo-server';
import TrackAPI from './datasources/api';
import schema from './schema';

export default async function startApolloServer() {
  const server = new ApolloServer({
    schema,
    dataSources: () => ({
      trackAPI: new TrackAPI(),
    }),
  });

  return server.listen({
    port: process.env.PORT || 4000,
  });
}
