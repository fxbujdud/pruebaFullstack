const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/palindrome', function (req, res) {
  const response = {
    phrase: '',
    palindrome: false,
    code: 200,
    error: false
  }

  response.phrase = req.body.phrase;

  if(req.body.phrase !== void 0) {

    const phrase = req.body.phrase.split('').reverse().join('');
    console.log(phrase);
    response.palindrome = phrase.split(' ').join('') === req.body.phrase.split(' ').join('') ? true : false;
  } else {
    response.code = 500,
    response.error = true;
  }

  res.send(response);
});

app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});