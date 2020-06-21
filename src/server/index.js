require('dotenv').config()

const express = require('express');
const app = express();

const { getCountries } = require('./db/queries/countries.js');
const { getCities } = require('./db/queries/cities.js');
const { normalizeQ } = require('./utils/normalize.js');

app.use(require('express-status-monitor')())

app.use(function(err, req, res, next) {
  if (err) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  }
});


app.get('/test', async function (req, res) {
  res.sendFile(__dirname + '/test.html')
});

app.get('/countries', async function (req, res) {
  const payload = {
    limit: 10,
    offset: 0,
    ...req.query,
    q: normalizeQ(req.query.q)
  }

  try {
    const data = await getCountries(payload);
    res.json(data);
  } catch {
    res.status(500).json({count: 0, items: [], error: 'Something broke!'})
  }
});

app.get('/cities', async function (req, res) {
  if (!req.query || !req.query.country_id) {
    res.status(400).json({count: 0, items: [], error: 'country_id required'})
    return;
  }
  const payload = {
    q: '',
    limit: 10,
    offset: 0,
    ...req.query,
    q: normalizeQ(req.query.q)
  }
  try {
    const data = await getCities(payload);
    res.json(data);
  } catch {
    res.status(500).json({count: 0, items: [], error: 'Something broke!'});
  }
});

app.listen(process.env.PORT, function () {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});


