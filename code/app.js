'use strict';

var SwaggerExpress = require('swagger-express-mw');
var SwaggerUi = require('swagger-tools/middleware/swagger-ui');
var app = require('express')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  //Swagger UI
  app.use(SwaggerUi(swaggerExpress.runner.swagger));

  //Install Swagger Middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 8080;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/exchange']) {
    console.log('Try curl http://127.0.0.1:' + port + '/exchange?name=NASDAQ');
  }
});
