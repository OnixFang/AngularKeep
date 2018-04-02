const express = require('express');
const path = require('path');

const rootPath = path.join(__dirname, '/../');
const port = 8012;
const app = express();

app.use(express.static(rootPath + '/app'));
app.listen(port);
console.log('Listening on port: ' + port);
