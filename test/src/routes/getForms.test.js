const Models = require('../../../models');
const server = require('../../../server');

const option1 = {
  method: 'GET',
  url: '/forms/display',
};

describe('Test for displayForm Response when there are no forms in the database', () => {
  beforeAll(done => Models.forms.destroyAllObjects()
    .then(() => done()));

  afterAll(done => Models.forms.destroyAllObjects()
    .then(() => done()));

  test('Responds with 200 code', testdone => server.inject(option1, (resp) => {
    expect(resp.result.code).toBe(200);
    testdone();
  }));

  test('Responds with 200 code', testdone => server.inject(option1, (resp) => {
    expect(typeof (resp.result.data)).toBe(typeof ([]));
    testdone();
  }));
});

describe('Test for displayForm Response when there are forms in the table', () => {
  beforeAll(done => Models.forms.destroyAllObjects()
    .then(() => Models.forms.createObject('Test Question').then(() => done())));

  afterAll(done => Models.forms.destroyAllObjects()
    .then(() => done()));

  test('Responds with 200 code', testdone => server.inject(option1, (resp) => {
    expect(resp.result.code).toBe(200);
    testdone();
  }));

  test('Responds with 200 code', testdone => server.inject(option1, (resp) => {
    expect(resp.result.data.length).toBe(1);
    testdone();
  }));
});

