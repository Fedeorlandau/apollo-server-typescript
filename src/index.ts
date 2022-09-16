import startApolloServer from './server';

startApolloServer().then(({ url, port }) => {
  // eslint-disable-next-line no-console
  console.log(`
    Server is running!
    Listening on port ${port}
    Explore at ${url}
  `);
});
