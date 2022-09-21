import { ApolloError } from 'apollo-server';
import { Resolvers } from '../resolvers-types';

const TrackResolvers: Resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => dataSources.trackAPI.getTracksForHome(),

    // get a single track by ID, for the track page
    track: (_, { id }, { dataSources }) => dataSources.trackAPI.getTrack(id),

  },
  Mutation: {
    // increments a track's numberOfViews property
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track,
        };
      } catch (err) {
        if (err instanceof ApolloError) {
          return {
            code: err.extensions.response.status,
            success: false,
            message: err.extensions.response.body,
            track: null,
          };
        }
        return {
          code: 500,
          success: false,
          message: 'Unknown error occurred',
          track: null,
        };
      }
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => dataSources.trackAPI.getAuthor(authorId),
    modules: ({ id }, _, { dataSources }) => dataSources.trackAPI.getTrackModules(id),
    durationInSeconds: ({ length }) => length || 0,
  },
};

export default TrackResolvers;
