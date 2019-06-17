require('dotenv').config();
const express = require('express');
const {createLogger, format, transports} = require('winston');
const { json} = format;

const logger = createLogger({
  level: process.env.LOG_LEVEL,
  defaultMeta: { service: 'appmeshapi' },
  transports: [ new transports.Console({ format: json() })]
});

const app = express();

app.get('/city', (req, res) => {
  console.info(`/city called, and answered with ${process.env.CITY || 'No City'}`);
  return res.send(process.env.CITY || 'No City')
});


app.listen(3000, () => {
  logger.info(`appmeshapi is running on port ${process.env.PORT}`)
})