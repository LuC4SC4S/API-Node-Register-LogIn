const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(routes);

app.listen(3333);
