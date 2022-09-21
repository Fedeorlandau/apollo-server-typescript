import { makeExecutableSchema } from '@graphql-tools/schema';
import { gql } from 'apollo-server';
import { ModuleResolvers, ModuleTypes } from './module';
import { TrackResolvers, TrackTypes } from './track';

const deafultTypeDefs = gql`
  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture"
    photo: String
  }
`;
const schema = makeExecutableSchema({
  typeDefs: [deafultTypeDefs, ModuleTypes, TrackTypes],
  resolvers: [ModuleResolvers, TrackResolvers],
});

export default schema;
