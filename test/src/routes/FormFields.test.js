const Models = require('../../../models');
const server = require('../../../server');
const createFormLib = require('../../../src/lib/createFormLib');

const option1 = {
  method: 'GET',
  url: '/form/1',
};

const formTitle = 'how is your friend1';
const quesArray = JSON.stringify([{ questext: 'how are you', quesisreq: true, enum_questions_questype: 'shortans' }, { questext: 'how are you2', quesisreq: true, enum_questions_questype: 'shortans' }]);


describe('Test for FormFields Response when there is one forms in the table', () => {
  beforeEach(done => Models.forms.destroyAllObjects()
    .then(() => createFormLib.createForm(formTitle, quesArray)
      .then(() => done())));

  test('Responds with 200 code', testdone => server.inject(option1, (resp) => {
    console.log(resp.result.data);
    expect(resp.result.code).toBe(200);
    expect(resp.result.data[0].dataValues.formtitle).toBe('how is your friend1');
    expect(resp.result.data[0].dataValues.questions.length).toBe(2);
    expect(resp.result.data[0].dataValues.questions[0].dataValues.questext).toBe('how are you');
    expect(resp.result.data[0].dataValues.questions[1].dataValues.questext).toBe('how are you2');
    testdone();
  }));

  afterEach(done => Models.forms.destroyAllObjects()
    .then(() => Models.questions.destroyAllObjects())
    .then(() => done()));
});

