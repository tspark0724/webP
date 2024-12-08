const express = require('express');
const app = express();

app.use(function(req, res, next) {
  res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
  res.end('<h1>Express Server에서 응답한 결과</h1>');
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
