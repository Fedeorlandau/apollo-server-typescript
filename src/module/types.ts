import { gql } from 'apollo-server';

const ModuleSchema = gql`
  
  type Query {
    module(id: ID!): Module!
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    "The module's title"
    title: String!
    "The track's approximate length to complete, in seconds"
    length: Int @deprecated(reason: "Use durationInSeconds")
    "The module video duration in seconds"
    durationInSeconds: Int
    "The module's text-based description, can be in markdown format. In case of a video, it will be the enriched transcript"
    content: String
    "The module's video url, for video-based modules"
    videoUrl: String
  }
`;

export default ModuleSchema;
