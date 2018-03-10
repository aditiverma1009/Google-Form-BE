const server = require('../../../server');

describe('Testcase for createForm server', () => {
  const option1 = {
    method: 'POST',
    url: '/form/create',
    payload: {
      formTitle: 'how is your friend1',
      quesArray: JSON.stringify([{ questext: 'how are you', quesisreq: true, enum_questions_questype: 'shortans' }]),
    },
  };

  const option2 = {
    method: 'POST',
    url: '/form/create',
    payload: {
      formTitle: 'how is your friend2',
      quesArray: JSON.stringify([{ questext: 'how are you1', quesisreq: true, enum_questions_questype: 'shortans' },
        { questext: 'how are you2', quesisreq: true, enum_questions_questype: 'shortans' }]),
    },
  };

  test('Test when there is one question and form title in payload', (done) => {
    server.inject(option1, (response) => {
      expect(response.result.code).toBe(200);
      done();
    });
  });

  test('Test when the quesArray payload has two questions', (done) => {
    server.inject(option2, (response) => {
      expect(response.result.code).toBe(200);
      done();
    });
  });
});
