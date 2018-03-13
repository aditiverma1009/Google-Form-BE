const Models = require('../../../models');
const server = require('../../../server');

const optionIncorrectUsername = {
  method: 'POST',
  url: '/form/create',
  payload: {
    formTitle: 11,
    quesArray: JSON.stringify([{ questext: 'how are you', quesisreq: true, enum_questions_questype: 'shortans' }]),
  },
};

const optionOneQuestions = {
  method: 'POST',
  url: '/form/create',
  payload: {
    formTitle: 'how is your friend1',
    quesArray: JSON.stringify([{ questext: 'how are you', quesisreq: true, enum_questions_questype: 'shortans' }]),
  },
};

const optionMultipleQuestions = {
  method: 'POST',
  url: '/form/create',
  payload: {
    formTitle: 'how is your friend2',
    quesArray: JSON.stringify([{ questext: 'how are you1', quesisreq: true, enum_questions_questype: 'shortans' },
      { questext: 'how are you2', quesisreq: true, enum_questions_questype: 'shortans' }]),
  },
};

describe('Testcase for Form server', () => {
  beforeEach(done => Models.forms.destroyAllObjects()
    .then(() => Models.questions.destroyAllObjects()
      .then(() => done())));

  afterEach(done => Models.forms.destroyAllObjects()
    .then(() => Models.questions.destroyAllObjects()
      .then(() => done())));


  test('Test when there is one question and form title in payload', (done) => {
    server.inject(optionOneQuestions, (response) => {
      console.log(response.result.data.forms);
      expect(response.result.code).toBe(201);
      expect(response.result.data.formtitle).toBe('how is your friend1');
      expect(response.result.data.questions[0].questext).toBe('how are you');

      expect(Models.forms.countObjects()).resolves.toBe(1);
      expect(Models.questions.countObjects()).resolves.toBe(1);
      // expect(response.result.data.formtitle).toBe('how is your friend');
      done();
    });
  });

  test('Test when the quesArray payload has two questions', (done) => {
    server.inject(optionMultipleQuestions, (response) => {
      console.log(response.result.code);
      console.log(response.result.data);
      expect(response.result.code).toBe(201);
      expect(response.result.data.formtitle).toBe('how is your friend2');
      expect(response.result.data.questions[0].questext).toBe('how are you1');
      expect(response.result.data.questions[1].questext).toBe('how are you2');
      expect(Models.forms.countObjects()).resolves.toBe(1);
      expect(Models.questions.countObjects()).resolves.toBe(2);
      done();
    });
  });

  test('Test when there is incorrect type formTitle', (done) => {
    server.inject(optionIncorrectUsername, (response) => {
      console.log(response.result.statusCode);
      expect(response.result.statusCode).toBe(400);
      done();
    });
  });
});
