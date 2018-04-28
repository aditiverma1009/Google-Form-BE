# GoogleForm-Backend

Works with the GoogleForm-Frontend only.

Steps to run the entire project on your local (mac)-

Clone both repositories of BigBasket 
npm install for both 
npm start for backend and node server.js for frontend repository 
Check the output on localhost:3000 or localhost:8001

This project was made during class practice. The project teachnology stack includes -> 
1 ) Frontend- React , CSS, HTML and Javascipt 
2 ) Backend- Nodejs 
3 ) Database- Postgres

Problem statement: Google form replication

Screens: In screens folder

Database schema-
1. forms(id, title)
2. questions(id, formId, questionText, answerType, isRequired)
3. answers(id, questionId, value)

Associations-
forms.hasMany(questions)
questions.hasMany(answers)