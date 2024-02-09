const express = require('express')
const cors = require('cors')
const router = require('./router')

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

module.exports = app;