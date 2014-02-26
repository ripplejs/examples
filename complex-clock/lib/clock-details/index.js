var template = require('./index.html');
var ripple = require('ripple');
var dateFilters = require('date-filters');
var numberFilters = require('number-filters');

var Details = ripple(template)
  .use(dateFilters)
  .use(numberFilters);

module.exports = Details;