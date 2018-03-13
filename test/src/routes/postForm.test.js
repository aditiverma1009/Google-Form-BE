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

describe('Testcase for postForm server', () => {
  beforeAll(done => Models.forms.destroyAllObjects()
    .then(() => Models.questions.destroyAllObjects()
      .then(() => done())));
  afterAll(done => Models.forms.destroyAllObjects()
    .then(() => Models.questions.destroyAllObjects()
      .then(() => done())));

  test('Test when there is incorrect type formTitle', (done) => {
    server.inject(optionIncorrectUsername, (response) => {
      expect(response.result.statusCode).toBe(400);
      done();
    });
  });

  test('Test when there is one question and form title in payload', (done) => {
    server.inject(optionOneQuestions, (response) => {
      expect(response.result.code).toBe(201);
      done();
    });
  });

  test('Test when the quesArray payload has two questions', (done) => {
    server.inject(optionMultipleQuestions, (response) => {
      expect(response.result.code).toBe(201);
      done();
    });
  });
});


describe('Testcase for database entries during postForm', () => {
  beforeEach(done => Models.forms.destroyAllObjects()
    .then(() => Models.questions.destroyAllObjects()
      .then(() => done())));
  afterEach(done => Models.forms.destroyAllObjects()
    .then(() => Models.questions.destroyAllObjects()
      .then(() => done())));


  test('Test for populating forms table', (done) => {
    server.inject(optionMultipleQuestions, () => {
      expect(Models.forms.countObjects()).resolves.toBe(1);
      done();
    });
  });

  test('Test for populating questions table', (done) => {
    server.inject(optionMultipleQuestions, () => {
      expect(Models.questions.countObjects()).resolves.toBe(2);
      done();
    });
  });
});
