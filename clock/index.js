var ripple = require('ripple');
var each = require('each');
var dateFilters = require('date-filters');
var numberFilters = require('number-filters');

var pageEl = document.body.firstElementChild;

// Create a view using the pages HTML as a template
var Page = ripple(pageEl.outerHTML)
  .use(dateFilters)
  .use(numberFilters);

// Hook for when the view is created. This fires
// before the view is rendered
Page.on('created', function(){
  this.interval = setInterval(this.tick.bind(this), 1000);
  this.tick();

  this.set('minor', Array(12).map(function(val, index){
    return  360 * index / 12;
  }));

  this.set('major', Array(60).map(function(val, index){
    return  360 * index / 60;
  }));
});

// Clean up when we destroy the view
Page.on('destroy', function(){
  clearInterval(this.interval);
});

// Every second this will get called and
// update the current time
Page.prototype.tick = function(){
  this.set('time', new Date());
};

// Create a new page and replace
// the content with the new view
var page = new Page();
page.mount(pageEl, true);