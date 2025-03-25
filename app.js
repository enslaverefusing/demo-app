const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from demo-app!',
    version: process.env.APP_VERSION || 'v1.0.0',
    environment: process.env.APP_ENV || 'development'
  });
});

app.listen(port, () => {
  console.log(`Demo app listening at http://localhost:${port}`);
});
