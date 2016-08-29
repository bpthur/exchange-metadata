// Exchange Controller
// This controller returns top level information on exchanges

'use strict';
var util = require('util');

module.exports = {
  exchange: exchange
};


//GET handler
function exchange(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value;
  var response = util.format('No data on exchange: %s', name);

  // this sends back a JSON response which is a single string
  res.json(response);
}
