import { Resolvers } from '../resolvers-types';

const ModuleResolvers: Resolvers = {
  Query: {
    // get a single module by ID, for the module detail page
    module: (_, { id }, { dataSources }) => dataSources.trackAPI.getModule(id),
  },

  Module: {
    durationInSeconds: ({ length }) => length || 0,
  },
};

export default ModuleResolvers;
