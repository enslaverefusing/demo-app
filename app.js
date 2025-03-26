const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from demo-app v1.1.0!',
    version: process.env.APP_VERSION || 'v1.1.0',
    environment: process.env.APP_ENV || 'development',
    timestamp: new Date().toISOString(),
    hostname: require('os').hostname()
  });
});

app.listen(port, () => {
  console.log(`Demo app listening at http://localhost:${port}`);
});
