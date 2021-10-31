const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8082;

app.use(express.static(__dirname + '/dist/controleLivros'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/controleLivros/index.html'));
});

app.listen(process.env.PORT || 8083);




