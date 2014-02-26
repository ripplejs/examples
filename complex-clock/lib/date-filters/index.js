var suffix = require('date-suffix');
var day = require('date-day');
var month = require('date-month');

module.exports = function(View) {

  View.filter('suffixedDate', function(val){
    return suffix(val);
  });

  View.filter('fullMonth', function(val){
    return month(val).full();
  });

  View.filter('fullDay', function(val){
    return day(val).full();
  });

};