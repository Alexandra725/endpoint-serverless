'use strict';

// eslint-disable-next-line import/no-unresolved
const express = require('express');
const superagent = require('superagent');

const app = express();

// Routes
app.get('/*', async (req, res) => {
  try { 
    const {text} = await superagent.get('https://api.exchangeratesapi.io/latest')
    const finalText = JSON.parse(text);
    res.status(200).send(finalText);
    } catch(err) {
     throw new Error;
 }
});

// Error handler
app.use((err, req, res) => {
  console.error(err);
  res.status(500).send('Internal Serverless Error');
});

module.exports = app;
