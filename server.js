const express = require('express')
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')))
app.use(express.json());

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('your app will load here')
})

const port = 3000;

app.listen(port, () => {
  console.log(`My app listening at http://localhost:${port}`);
});
