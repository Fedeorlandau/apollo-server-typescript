import createApolloServer from '../src/server';
import { setTestUtils, TestUtils } from './utils';

let server; let
  url;

// before the tests we will spin up a new Apollo Server
beforeAll(async () => {
  ({ server, url } = await createApolloServer());
  setTestUtils(new TestUtils(url));
});

// after the tests we will stop our server
afterAll(async () => {
  await server?.close();
});
