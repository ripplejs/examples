module.exports = function(View) {
  View.filter('pad', function (num){
    return ( num < 10 ? '0' + num : num );
  });
};