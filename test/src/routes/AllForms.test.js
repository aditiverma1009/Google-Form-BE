const Models = require('../../../models');
const server = require('../../../server');

const option1 = {
  method: 'GET',
  url: '/forms/all',
};

describe('Test for All Form Fields display Response when there are no forms in the database', () => {
  beforeEach(done => Models.forms.destroyAllObjects()
    .then(() => done()));

  afterEach(done => Models.forms.destroyAllObjects()
    .then(() => done()));

  test('Responds with 200 code', testdone => server.inject(option1, (resp) => {
    expect(resp.result.code).toBe(200);
    expect(resp.result.data).toEqual([]);
    testdone();
  }));
});

describe('Test for displayForm Response when there are forms in the table', () => {
  beforeEach(done => Models.forms.destroyAllObjects()
    .then(() => Models.forms.createObject('Test Question').then(() => done())));

  afterEach(done => Models.forms.destroyAllObjects()
    .then(() => done()));

  test('Responds with 200 code', testdone => server.inject(option1, (resp) => {
    expect(resp.result.code).toBe(200);
    expect(resp.result.data.length).toBe(1);
    testdone();
  }));
});

