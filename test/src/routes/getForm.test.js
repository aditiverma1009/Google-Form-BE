const Models = require('../../../models');
const server = require('../../../server');
const createFormLib = require('../../../src/lib/createFormLib');

const option1 = {
  method: 'GET',
  url: '/form/1',
};

const formTitle = 'how is your friend1';
const quesArray = JSON.stringify([{ questext: 'how are you', quesisreq: true, enum_questions_questype: 'shortans' }, { questext: 'how are you2', quesisreq: true, enum_questions_questype: 'shortans' }]);


describe('Test for getForm Response when there is one forms in the table', () => {
  beforeAll(done => Models.forms.destroyAllObjects()
    .then(() => createFormLib.createForm(formTitle, quesArray)
      .then(() => done())));

  test('Responds with 200 code', testdone => server.inject(option1, (resp) => {
    expect(resp.result.code).toBe(200);
    testdone();
  }));

  test('Responds with questions length 2', testdone => server.inject(option1, (resp) => {
    expect(resp.result.data[0].questions.length).toBe(2);
    testdone();
  }));

  afterAll(done => Models.forms.destroyAllObjects()
    .then(() => Models.questions.destroyAllObjects())
    .then(() => done()));
});

