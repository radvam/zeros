module.exports = function zeros(expression) {
  let two = 0; 
  let five = 0;
  let ten = 0;

  let arrFactorials = expression.split('*');
  
  for (let i = 0; i < arrFactorials.length; i++) {

    if(arrFactorials[i].endsWith("!!")) {

      let n = parseInt(arrFactorials[i]);

      if (n % 2 === 0) {
        two += amount(n, 2);
        ten += Math.floor(n / 10) + Math.floor(n / 50);
      } else {
        five += amount(n, 5) - Math.floor(n / 10) - Math.floor(n / 50);
      }

    } else {
      let n = parseInt(arrFactorials[i]);
      two += amount(n, 2);
      five += amount(n, 5);
    }
  }

  return Math.min(two, five) + ten;
} 
  
function amount(dividend, divider) {
  let res = 0;
  while(dividend > 0) {
    dividend = Math.floor(dividend / divider);
    res += dividend;
  }
  return res;
}