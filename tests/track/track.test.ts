import request from 'supertest';
import { getTestUtils } from '../utils';

const queryData = {
  query: `query GetTracksForHome {
    tracksForHome {
        id
        title
        authorId
        thumbnail
        description
      }
  }`,
};

describe('Track Gateway Test', () => {
  it('should fetch tracks for the homepage', async () => {
    const { url } = getTestUtils();
    const response = await request(url).post('/').send(queryData);
    expect(response.error).toBeFalsy();
    expect(response.body.data.tracksForHome).toMatchSnapshot();
  });
});
