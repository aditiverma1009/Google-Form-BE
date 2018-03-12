// const Models = require('../../../models');
// const server = require('../../../server');
// const createForm = require('../../../src/helper/createForm');

// const option1 = {
//   method: 'GET',
//   url: '/form/showFormFields',
//   payload: { formid: 43 },
// };


// const formTitle = 'how is your friend1';
// const quesArray = JSON.stringify([{ questext: 'how are you', quesisreq: true, enum_questions_questype: 'shortans' }]);

// describe('Test for showForm Fields', () => {
//   test('Responds with 200 code', testdone => server.inject(option1, (resp) => {
//     expect(resp.result.code).toBe(200);
//     testdone();
//   }));
// });

// // describe('Test for displayForm Response when there are forms in the table', () => {
// //   beforeAll(done => Models.forms.destroyAllObjects()
// //     .then(() => Models.forms.createObject({
// //       formtitle: 'Test Ques',
// //     }).then(() => done())));

// //   test('Responds with 200 code', testdone => server.inject(option1, (resp) => {
// //     expect(resp.result.code).toBe(200);
// //     testdone();
// //   }));

// //   afterAll(done => Models.forms.destroyAllObjects()
// //     .then(() => done()));
// // });

