import request from 'supertest';
import { getTestUtils } from './utils';

const queryData = {
  query: `query DoPing {
    ping
  }`,
};

describe('sanity check', () => {
  it('says hello', async () => {
    const { url } = getTestUtils();
    const response = await request(url).post('/').send(queryData);
    expect(response.error).toBeFalsy();
    expect(response.body.data?.ping).toBe('pong');
  });
});
