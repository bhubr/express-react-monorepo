// src/app.js
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => res.json({ foo: 'bar' }));

module.exports = app;
