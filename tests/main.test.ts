import request from 'supertest';
import { getTestUtils } from './utils';

const queryData = {
  query: `query sayHello($name: String) {
    hello(name: $name)
  }`,
  variables: { name: 'world' },
};

describe('sanity check', () => {
  it('says hello', async () => {
    const { url } = getTestUtils();
    const response = await request(url).post('/').send(queryData);
    expect(response.error).toBeFalsy();
    expect(response.body.data?.hello).toBe('Hello world');
  });
});
