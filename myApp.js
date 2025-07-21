const express = require('express');
const bcrypt = require('bcrypt');
const helmet = require('helmet');

ninetyDaysInSeconds = 90*24*60*60;

const app = express();

app.use(
  helmet.contentSecurityPolicy({
    directives:{
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'",'trusted-cdn.com'],
    },
  }),
  helmet.hidePoweredBy(),
  helmet.hsts(
    {
      maxAge: ninetyDaysInSeconds, force: true
    }
  ),
  helmet.frameguard(
    {
      action: "deny",
    }
  ),
  helmet.xssFilter(),
  helmet.noSniff(),
  helmet.ieNoOpen(),
  helmet.dnsPrefetchControl(),
  helmet.noCache(),
);

app.get('/', (req,res) => {
  res.send('Hello Cipher');
});


module.exports=app;













































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
