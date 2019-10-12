const express = require('express');
const path = require('path');
const { redirectToHTTPS } = require('express-http-to-https');

const PORT = process.env.PORT || 5000;

express()
  .use(redirectToHTTPS([/localhost:(\d{4})/], [], 301))
  .use(express.static(path.join(__dirname, 'dist')))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
