var Clock = require('clock');

var clock = new Clock({
  now: new Date()
});

// Append the view element to another element
clock.mount(document.body.firstElementChild, true);

// Update the date every second
setInterval(function(){
  clock.set('now', new Date());
}, 1000);