var template = require('./index.html');
var suffix = require('date-suffix');
var day = require('date-day');
var month = require('date-month');
var ripple = require('ripple');
var each = require('each');

var Clock = ripple(template)
  .use(each);

Clock.filter('date', function(val){
  return suffix(val);
});

Clock.filter('month', function(val){
  return month(val).full();
});

Clock.filter('day', function(val){
  return day(val).full();
});

Clock.filter('pad', function (num){
  return ( num < 10 ? '0' + num : num );
});

Clock.prototype.init = function(){
  this.set('minor', Array(12).map(function(val, index){
    return  360 * index / 12;
  }));
  this.set('major', Array(60).map(function(val, index){
    return  360 * index / 60;
  }));
};

module.exports = Clock;