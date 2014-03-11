var ripple = require('ripple');
var events = require('events');
var template = require('./template.html');

var LikeButton = ripple(template)
  .use(events);

LikeButton.on('created', function(){
  this.state.set({
    liked: false
  });
});

LikeButton.prototype.handleClick = function(){
  this.state.liked = !this.state.liked;
};

module.exports = LikeButton;