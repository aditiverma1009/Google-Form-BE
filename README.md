# GoogleForm-Backend

Works with the GoogleForm-Frontend only.

Steps to run the entire project on your local (mac)-<br/>

1 ) Clone both repositories of BigBasket<br/>
2 ) npm install for both and then set up postgres database according to config file credentials. <br/>
3 ) db migrate and then npm start for backend and node server.js for frontend repository.<br/>
4 ) Check the output on localhost:3000 or localhost:8001<br/>


This project was made during class practice. The project teachnology stack includes -> <br/>
1 ) Frontend- React , CSS, HTML and Javascipt <br/>
2 ) Backend- Nodejs <br/>
3 ) Database- Postgres<br/>


Problem statement: Google form replication<br/>


Screens: In screens folder<br/>


Database schema-<br/>
1. forms(id, title)<br/>
2. questions(id, formId, questionText, answerType, isRequired)<br/>
3. answers(id, questionId, value)<br/>


Associations-<br/>
forms.hasMany(questions)<br/>
questions.hasMany(answers)<br/>
