const server = require('../../../server');

describe('Testcase for root server', () => {
  it('Should print On root.', (done) => {
    const options = {
      method: 'GET',
      url: '/',
    };
    server.inject(options, (response) => {
      expect(response.payload).toBe('On root.');
      done();
    });
  });

  it('Testing for status code', (done) => {
    const options = {
      method: 'GET',
      url: '/',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
