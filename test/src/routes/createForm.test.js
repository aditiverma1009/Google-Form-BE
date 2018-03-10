const server = require('../../../server');

describe('Testcase for createForm server', () => {
  const option1 = {
    method: 'POST',
    url: '/form/create',

    payload: {
      formTitle: 'how is your friend',
      quesArray: JSON.stringify([{ questext: 'how are you', quesisreq: true, enum_questions_questype: 'shortans' }]),
    },
  };


  test('Test when there is one question and form title in payload', (done) => {
    server.inject(option1, (response) => {
      expect(response.result.code).toBe(200);
      done();
    });
  });
});
