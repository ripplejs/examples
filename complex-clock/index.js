var Clock = require('clock');
var ripple = require('ripple');
var ClockDetails = require('clock-details');
var pageEl = document.body.firstElementChild;

var Page = ripple(pageEl.outerHTML);

// Compose the sub-views
Page
  .component('clock', Clock)
  .component('clockdetails', ClockDetails);

// Hook for when the view is created. This fires
// before the view is rendered so we can set some
// default properties on the view too.
Page.on('created', function(){
  this.interval = setInterval(this.tick.bind(this), 1000);
  this.tick();
});

// Clean up when we destroy the view
Page.on('destroy', function(){
  clearInterval(this.interval);
});

// Every second this will get called and
// update the current time
Page.prototype.tick = function(){
  this.set('now', new Date());
};

// Create a new page and replace
// the content with the new view
var page = new Page();
page.mount(pageEl, true);