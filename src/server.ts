import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';
import TrackAPI from './datasources/track-api';
import typeDefs from './schema';

export default async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      trackAPI: new TrackAPI(),
    }),
  });

  return server.listen({
    port: process.env.PORT || 4000,
  });
}
