var template = require('./index.html');
var ripple = require('ripple');
var each = require('each');

var minorRotations = Array(12).map(function(val, index){
  return  360 * index / 12;
});

var majorRotations = Array(60).map(function(val, index){
  return  360 * index / 60;
});

var Clock = ripple(template)
  .use(each);

Clock.on('created', function(){
  this.set({
    'minor': minorRotations,
    'major': majorRotations
  });
});

module.exports = Clock;