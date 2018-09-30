module.exports = function getZerosCount(number) {
  var i = number, c1 = 0, c2 = 1;
  while(i > 4){
    c1+=(Math.floor(i/5));
    i = Math.floor(i/5);
    c2*=5;
  }
  return c1;
}
