const express = require('express');
const bodyParser = require('body-parser');
const { findAllUsers } = require('./controllers/userController');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/users', findAllUsers);

const PORT = process.env.PORT || 3000;
app.listen(PORT)
